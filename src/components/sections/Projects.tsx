import React from 'react';
import { Globe2, Database, Network, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Latest Work</h2>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Google Places Scraper
              </h3>
              <div className="mt-2 md:mt-0 flex items-center space-x-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Production
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Globe2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Global Data Collection System
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Engineered a highly efficient world-scale scraper using H3 hexagonal spatial indexing.
                    The system intelligently pre-scans regions to identify valuable areas before
                    performing targeted data collection for specific search terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Architecture & Technologies
                  </h4>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Go Microservices</li>
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">NATS</li>
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">PostgreSQL</li>
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">REST API</li>
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">H3 Indexing</li>
                    <li className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Docker</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    System Integration
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Implemented asynchronous communication between services using NATS,
                    with a central API gateway coordinating data collection tasks.
                    Optimized for high throughput and reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Data Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Designed an efficient PostgreSQL schema with optimized indexes for fast spatial queries.
                    Implemented robust data validation and deduplication processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;