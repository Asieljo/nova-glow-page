
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppSection from '../components/AppSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to sections when clicking on navigation links
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      if (href === '#') return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    };
    
    document.body.addEventListener('click', handleNavigation);
    
    return () => {
      document.body.removeEventListener('click', handleNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AppSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
