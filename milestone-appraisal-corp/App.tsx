import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import AIAdvisor from './components/AIAdvisor';
import { SectionId } from './types';

const App: React.FC = () => {
  // Use state to manage "pages" instead of scroll sections
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const navigateTo = (id: SectionId) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setActiveSection(id);
  };

  const renderContent = () => {
    switch (activeSection) {
      case SectionId.HOME:
        return <Hero navigateTo={navigateTo} />;
      case SectionId.ABOUT:
        return <About />;
      case SectionId.SERVICES:
        return <Services />;
      case SectionId.TEAM:
        return <Team />;
      case SectionId.CONTACT:
        return <Contact />;
      case SectionId.AI_CONSULT:
        return <AIAdvisor />;
      default:
        return <Hero navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} navigateTo={navigateTo} />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      {/* Footer can be global or specific, keeping it simple here as part of specific pages or a global footer if needed. 
          For this design, Contact page serves as the main footer area, but we can add a small copyright footer for other pages if desired. 
          Currently, Contact page has the footer. */}
    </div>
  );
};

export default App;