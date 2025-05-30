import React from 'react';
import { Code, TestTube, Users } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = 
    service.icon === 'Code' ? Code : 
    service.icon === 'TestTube' ? TestTube : 
    Users;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-700 transition-colors">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Backend Development',
      description: 'Building high-performance, scalable backend systems with Go and modern architectures. Specializing in microservices, APIs, and cloud-native applications.',
      icon: 'Code',
    },
    {
      title: 'Test Engineering',
      description: 'Implementing comprehensive testing strategies with automation, performance testing, and quality assurance processes to ensure robust, reliable software.',
      icon: 'TestTube',
    },
    {
      title: 'Technical Leadership',
      description: 'Providing technical direction, mentoring development teams, and driving best practices in software engineering and DevOps processes.',
      icon: 'Users',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Specialized services focused on backend excellence and technical leadership
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;