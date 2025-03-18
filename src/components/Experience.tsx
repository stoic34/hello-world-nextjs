import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('career');
  
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Experience & Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button
              className={`py-2 px-4 font-medium text-sm md:text-base ${activeTab === 'career' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('career')}
            >
              Entrepreneurial Journey
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm md:text-base ${activeTab === 'education' ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
          
          {activeTab === 'career' && (
            <div className="space-y-6">
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">Present</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">President</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tario Ventures Inc.</p>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        Leading Tario Ventures Inc., focusing on identifying and developing high-potential business opportunities. Responsible for strategic direction, business development, and overall company growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">1999</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Beginning of Entrepreneurship</h3>
                    <p className="text-gray-600 dark:text-gray-400">Left Ph.D. Program</p>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        Made the pivotal decision to leave my Ph.D. program at the University of Toronto to pursue entrepreneurship. This marked the beginning of my journey as a business builder and entrepreneur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">1999 - Present</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Serial Entrepreneur</h3>
                    <p className="text-gray-600 dark:text-gray-400">Various Ventures</p>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        Built and grown multiple businesses across various industries. Developed expertise in identifying market opportunities, building effective teams, securing funding, and scaling operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">Class of '07</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">MBA</h3>
                    <p className="text-gray-600 dark:text-gray-400">Kellogg-Schulich</p>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        Graduated from the prestigious Joint Kellogg-Schulich MBA program (Northwestern University and York University). Selected as class valedictorian. Specialized in entrepreneurship and strategic management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">Until 1999</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ph.D. Studies (Partial)</h3>
                    <p className="text-gray-600 dark:text-gray-400">University of Toronto</p>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300">
                        Pursued doctoral studies at the University of Toronto before choosing to redirect my career toward entrepreneurship. This academic background provided me with valuable analytical and research skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
