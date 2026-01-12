import React from 'react';
import { Building2, Gavel, Coins, HardHat, HandCoins, TrendingUp, Lightbulb, FileSearch } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 />,
      title: "담보 평가",
      desc: "금융기관 대출 및 여신 결정을 위한 담보물의 적정 가치를 신속하고 정확하게 산정합니다."
    },
    {
      icon: <Gavel />,
      title: "경매/소송",
      desc: "법원 경매, 자산 분할, 임대료 분쟁 등 이해관계 조정이 필요한 법적 절차를 지원합니다."
    },
    {
      icon: <Coins />,
      title: "상속/증여 절세",
      desc: "세무서 인정 범위를 고려한 시가 감정으로 상속세 및 증여세를 합법적으로 절감합니다."
    },
    {
      icon: <HardHat />,
      title: "도시정비사업",
      desc: "재개발·재건축 사업의 종전자산 및 종후자산 평가, 분담금 추정 등 정비사업 전반 컨설팅."
    },
    {
      icon: <HandCoins />,
      title: "보상 평가",
      desc: "공익사업 수용 시 정당한 보상을 받기 위한 보상액 산정 및 수용재결 등 불복 절차 대행."
    },
    {
      icon: <TrendingUp />,
      title: "자산 재평가",
      desc: "IFRS 도입 기업의 유형자산 공정가치 평가를 통해 재무구조 개선 및 기업 가치를 제고합니다."
    },
    {
      icon: <Lightbulb />,
      title: "영업권/지재권",
      desc: "기업 인수를 위한 영업권 가치 평가 및 특허권, 상표권 등 무형자산 가치 평가를 수행합니다."
    },
    {
      icon: <FileSearch />,
      title: "탁상 감정",
      desc: "정식 감정 의뢰 전, 예상 감정가액을 신속하게 검토하여 의사결정의 가이드라인을 제공합니다."
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-slate-900 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">BUSINESS AREAS</h2>
        <p className="text-slate-400 text-lg">마일스톤만의 전문적인 업무 영역을 소개합니다</p>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group hover:-translate-y-2 border border-slate-100"
              >
                <div className="mb-6 p-4 bg-orange-50 w-fit rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-orange-500 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">내 자산의 가치가 궁금하신가요?</h3>
            <p className="mb-8 text-orange-100 max-w-2xl mx-auto relative z-10">
              복잡한 절차 없이 전문가의 상담을 받아보세요. 마일스톤이 가장 빠르고 정확한 해답을 드립니다.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors relative z-10 shadow-lg">
              상담 문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;