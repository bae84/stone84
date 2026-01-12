import React from 'react';
import { CheckCircle2, ShieldCheck, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-slate-900 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">ABOUT US</h2>
        <p className="text-slate-400 text-lg">신뢰할 수 있는 파트너, 마일스톤 감정평가법인</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            <div className="flex-1">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Vision</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                정확한 가치평가로<br/>
                고객의 자산 가치를 극대화합니다
              </h3>
              <p className="text-slate-600 mb-8 leading-loose text-lg">
                마일스톤 감정평가법인은 급변하는 부동산 시장 환경 속에서 고객에게 
                가장 합리적이고 신뢰할 수 있는 감정평가 서비스를 제공하기 위해 설립되었습니다.
                <br/><br/>
                우리는 단순한 가액 산정을 넘어, 고객의 성공적인 의사결정을 돕는 
                전략적 파트너로서의 역할을 수행합니다. 다양한 분야의 전문가들이 모여 
                축적된 데이터와 노하우를 바탕으로 최적의 솔루션을 제안합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                 {[
                  { icon: ShieldCheck, text: "공정성과 신뢰성 보장" },
                  { icon: Award, text: "국토부 지정 우수법인" },
                  { icon: Users, text: "분야별 전문 평가사" },
                  { icon: CheckCircle2, text: "신속한 의사결정 지원" }
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <item.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <span className="font-bold text-slate-700">{item.text}</span>
                    </div>
                 ))}
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute top-10 right-10 w-full h-full border-4 border-orange-100 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                alt="Team Meeting" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-10 left-[-20px] bg-white p-8 rounded-xl shadow-xl border-l-8 border-orange-500 max-w-xs hidden md:block">
                <p className="text-3xl font-black text-slate-900 mb-1">Since 2010</p>
                <p className="text-slate-500 font-medium">10년 이상의 노하우와<br/>압도적인 데이터베이스</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;