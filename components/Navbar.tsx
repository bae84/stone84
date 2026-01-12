import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: string;
  navigateTo: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, navigateTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: SectionId.ABOUT, label: 'ABOUT US' },
    { id: SectionId.SERVICES, label: 'BUSINESS AREAS' },
    { id: SectionId.TEAM, label: 'MEMBERS' },
    { id: SectionId.CONTACT, label: 'CONTACT' },
  ];

  const handleNavClick = (id: SectionId) => {
    navigateTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer flex items-center gap-2 group"
          onClick={() => handleNavClick(SectionId.HOME)}
        >
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-orange-600 transition-colors">
            {/* M Shape Logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 21V4l8 10 8-10v17" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 leading-none">MILESTONE</span>
            <span className="text-xs font-medium text-orange-500 tracking-[0.2em] uppercase">Appraisal Corp</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-bold transition-all relative py-2
                ${activeSection === link.id ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'}
              `}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => handleNavClick(SectionId.AI_CONSULT)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all bg-slate-900 text-white hover:bg-orange-500 shadow-md hover:shadow-lg"
          >
            <Sparkles size={16} className="text-orange-400 group-hover:text-white" />
            AI CONSULT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden border-t border-slate-100 h-screen">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-xl font-bold text-slate-800 py-3 border-b border-slate-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
             onClick={() => handleNavClick(SectionId.AI_CONSULT)}
             className="w-full text-center mt-8 bg-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
          >
            AI CONSULTATION
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;