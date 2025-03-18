import Button from '@/components/Button';
import Section from '@/components/Section';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl text-gray-800 mb-4">
        Jason Goncalves
      </h1>
      <h2 className="text-2xl text-blue-600 mb-6">
        Business Builder & Serial Entrepreneur
      </h2>
      <p className="text-lg leading-relaxed mb-8">
        Building innovative ventures since 1999. MBA class valedictorian with a passion for entrepreneurship and transformative business ideas.
      </p>
      
      <div className="flex gap-4 mb-12">
        <Button href="https://www.linkedin.com/" variant="primary">
          LinkedIn
        </Button>
        <Button href="https://twitter.com/" variant="secondary">
          Twitter
        </Button>
      </div>
      
      <Section title="About Me">
        <p className="text-lg leading-relaxed">
          As a business builder and serial entrepreneur, I've dedicated my career to transforming innovative ideas into successful ventures. My entrepreneurial journey began in 1999 when I made the bold decision to leave my Ph.D. program at the University of Toronto to pursue my passion for building businesses.
        </p>
      </Section>
      
      <Section title="Experience">
        <div className="mb-6">
          <h3 className="text-xl mb-2">President - Tario Ventures Inc.</h3>
          <p className="text-lg leading-relaxed">
            Leading Tario Ventures Inc., focusing on identifying and developing high-potential business opportunities.
          </p>
        </div>
      </Section>
      
      <Section title="Education">
        <div>
          <h3 className="text-xl mb-2">MBA - Kellogg-Schulich (Class of '07)</h3>
          <p className="text-lg leading-relaxed">
            Graduated from the prestigious Joint Kellogg-Schulich MBA program (Northwestern University and York University). Selected as class valedictorian.
          </p>
        </div>
      </Section>
    </div>
  );
}