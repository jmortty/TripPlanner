import React, { useState } from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Features from './Features';
import CTA from './CTA';
import Contact from './Contact';
import FormPage from './FormPage';
import UserPage from './UserPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page

  // Handler to navigate to the form page
  const navigateToForm = () => {
    setCurrentPage('form');
  };

  // Handler to navigate back to the main page
  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {currentPage === 'home' ? (
        <>
          {/* Main single-page app content */}
          <Hero onNavigateToForm={navigateToForm} />
          <AboutUs />
          <Features />
          <CTA />
          <Contact />
          <UserPage/>
        </>
      ) : (
        <FormPage onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}

export default App;
