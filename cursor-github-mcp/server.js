require('dotenv').config();
const express = require('express');
const { Octokit } = require('@octokit/rest');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');
const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Configure rate limiter
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS), // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

const app = express();
const port = process.env.PORT || 3001;

// Apply rate limiting to all routes
app.use(limiter);

// Logging middleware
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.get('user-agent')
  });
  next();
});

// Initialize Octokit with GitHub token
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

// Middleware to verify GitHub webhook signature
const verifyWebhookSignature = (req, res, next) => {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) {
    return res.status(401).json({ error: 'No signature provided' });
  }

  const hmac = crypto.createHmac('sha256', process.env.WEBHOOK_SECRET);
  const digest = `sha256=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;
  
  if (signature !== digest) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  next();
};

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// GitHub webhook endpoint
app.post('/webhook', verifyWebhookSignature, async (req, res) => {
  try {
    const { repository, sender, action } = req.body;
    
    // Log the webhook event
    console.log(`Received ${action} event from ${sender.login} on ${repository.full_name}`);
    
    // Handle different webhook events
    switch (action) {
      case 'opened':
      case 'synchronize':
        // Handle pull request events
        if (req.body.pull_request) {
          const { number, title, body, head, base } = req.body.pull_request;
          console.log(`Processing PR #${number}: ${title}`);
          
          // Add PR processing logic
          await processPullRequest({
            number,
            title,
            body,
            head,
            base,
            repository,
            sender
          });
        }
        break;
      
      case 'created':
        // Handle issue creation
        if (req.body.issue) {
          const { number, title, body, labels } = req.body.issue;
          console.log(`Processing Issue #${number}: ${title}`);
          
          // Add issue processing logic
          await processIssue({
            number,
            title,
            body,
            labels,
            repository,
            sender
          });
        }
        break;

      case 'labeled':
        // Handle label events
        if (req.body.label) {
          const { name, color } = req.body.label;
          console.log(`Processing label event: ${name}`);
          await processLabelEvent(req.body);
        }
        break;
    }
    
    res.status(200).json({ message: 'Webhook received and processed' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Helper functions for processing events
async function processPullRequest({ number, title, body, head, base, repository, sender }) {
  try {
    // Add PR processing logic here
    // For example, auto-assign reviewers, add labels, etc.
    await octokit.issues.addLabels({
      owner: repository.owner.login,
      repo: repository.name,
      issue_number: number,
      labels: ['needs-review']
    });
  } catch (error) {
    console.error('Error processing PR:', error);
    throw error;
  }
}

async function processIssue({ number, title, body, labels, repository, sender }) {
  try {
    // Add issue processing logic here
    // For example, auto-assign to team members, add templates, etc.
    await octokit.issues.addAssignees({
      owner: repository.owner.login,
      repo: repository.name,
      issue_number: number,
      assignees: [repository.owner.login]
    });
  } catch (error) {
    console.error('Error processing issue:', error);
    throw error;
  }
}

async function processLabelEvent(event) {
  try {
    const { repository, issue, label } = event;
    // Add label event processing logic here
    // For example, trigger workflows based on labels
    console.log(`Label ${label.name} added to ${issue.html_url}`);
  } catch (error) {
    console.error('Error processing label event:', error);
    throw error;
  }
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// Start server
app.listen(port, () => {
  console.log(`GitHub MCP server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}); 