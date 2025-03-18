export default function Skills() {
  const businessSkills = [
    { name: 'Business Strategy', level: 95 },
    { name: 'Leadership', level: 90 },
    { name: 'Entrepreneurship', level: 95 },
    { name: 'Business Development', level: 85 },
    { name: 'Financial Management', level: 80 },
  ];

  const leadershipSkills = [
    { name: 'Team Building', level: 90 },
    { name: 'Strategic Vision', level: 95 },
    { name: 'Communication', level: 85 },
    { name: 'Negotiation', level: 90 },
    { name: 'Problem Solving', level: 85 },
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Business Acumen
            </h3>
            <div className="space-y-5">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Leadership & Management
            </h3>
            <div className="space-y-5">
              {leadershipSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'Venture Building',
              'Strategic Planning',
              'Business Growth',
              'Market Analysis',
              'Investor Relations',
              'Team Leadership',
              'Financial Strategy',
              'Decision Making',
              'Risk Management',
              'Innovation',
              'Networking',
              'Deal Structuring'
            ].map((expertise, index) => (
              <div 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg py-3 px-4 text-center text-gray-800 dark:text-gray-200 font-medium text-sm transition-all hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200"
              >
                {expertise}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
