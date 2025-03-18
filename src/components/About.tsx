export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 md:p-8 shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              As a business builder and serial entrepreneur, I've dedicated my career to transforming innovative ideas into successful ventures. My entrepreneurial journey began in 1999 when I made the bold decision to leave my Ph.D. program at the University of Toronto to pursue my passion for building businesses.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              With an MBA from the prestigious Joint Kellogg-Schulich MBA program, where I was honored as class valedictorian, I've developed a deep understanding of business strategy, leadership, and market dynamics. This educational foundation, combined with hands-on experience, has been instrumental in my approach to entrepreneurship.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My business philosophy centers on creating sustainable value, fostering innovation, and building teams that drive exceptional results. I believe in leadership that empowers others, strategic vision that anticipates market opportunities, and execution that delivers measurable outcomes.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-600">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Business Growth</h3>
              <p className="text-gray-700 dark:text-gray-300">Driving sustainable business growth through strategic vision and exceptional execution.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-600">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">Embracing innovative thinking to develop unique solutions and create market advantages.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-600">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Leadership</h3>
              <p className="text-gray-700 dark:text-gray-300">Building high-performing teams through effective leadership and a focus on shared success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
