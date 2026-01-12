import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  navigateTo: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // High rise
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop", // Skyline
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop", // Modern building
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"  // Office interior/glass
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Office background ${index + 1}`} 
            className="w-full h-full object-cover opacity-80"
          />
           <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        
        {/* Optimized font sizes for mobile: text-5xl (mobile) -> text-7xl (tablet) -> text-8xl (desktop) */}
        <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-white leading-[1.1] mb-8 drop-shadow-2xl transition-all">
          MILESTONE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">APPRAISAL</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-100 mb-12 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
          마일스톤 감정평가법인은 고객의 성공적인 비즈니스를 위한<br className="hidden md:block"/> 
          <span className="font-bold text-white border-b-2 border-orange-500 pb-1">결정적인 이정표</span>를 제시합니다.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start">
          <button 
            onClick={() => navigateTo(SectionId.CONTACT)}
            className="group bg-orange-500 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/30"
          >
            무료 상담 신청
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => navigateTo(SectionId.SERVICES)}
            className="px-10 py-5 rounded-lg font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
          >
            업무분야 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;