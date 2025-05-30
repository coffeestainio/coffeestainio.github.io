import React from 'react';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex items-center space-x-2"
          >
            {skill === 'Go' && (
              <img src="https://go.dev/images/go-logo-blue.svg\" alt="Go logo\" className="h-5 w-5" />
            )}
            <span className="text-gray-800 dark:text-gray-200">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const techSkills = [
    'Go',
    'Kubernetes',
    'Docker',
    'AWS',
    'GCP',
    'CI/CD',
    'Microservices',
    'REST APIs',
    'gRPC',
    'PostgreSQL',
    'Redis',
    'MongoDB'
  ];

  const toolsAndPractices = [
    'Git',
    'GitHub Actions',
    'Jenkins',
    'Terraform',
    'Prometheus',
    'Grafana'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
            Delivering enterprise-grade solutions with cutting-edge technologies
          </p>
          
          <div className="space-y-8">
            <SkillCategory title="Core Technologies" skills={techSkills} />
            <SkillCategory title="Tools & Infrastructure" skills={toolsAndPractices} />
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 p-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Industry Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Certified Kubernetes Developer (CKD)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">AWS Certified Solutions Architect</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Google Cloud Professional Engineer</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-8">
              * Go is a trademark of Google LLC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;