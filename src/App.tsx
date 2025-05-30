import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'coffeestain.io | Golang & Kubernetes Expert';
    
    // Add observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;