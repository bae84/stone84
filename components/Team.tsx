import React from 'react';

const Team: React.FC = () => {
  const team = [
    {
      name: "배지용",
      role: "대표 감정평가사",
      desc: "대형 법인 출신, 상속/증여 및 개발사업 타당성 검토 전문",
      // 40s Gentleman: Trustworthy, experienced leader, clean suit
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: "유홍재",
      role: "파트너 감정평가사",
      desc: "기업자문(Advisory) 및 기업가치평가 전문",
      // Reverted to previous Byeon Woo-seok vibe
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
    },
    {
      name: "조예담",
      role: "파트너 감정평가사",
      desc: "미술품 감정평가 및 기업 경영 컨설팅 담당",
      // Reverted to previous Kim Da-mi vibe
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
    },
    {
      name: "황효민",
      role: "파트너 감정평가사",
      desc: "영업권, 특허권 등 무형자산 가치평가 특화",
      // 20s Late Career Woman: Smart, confident, professional
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=2574&auto=format&fit=crop"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-slate-900 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">MEMBERS</h2>
        <p className="text-slate-400 text-lg">최고의 전문가들이 당신의 자산을 분석합니다</p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-1 bg-orange-500 mb-4 rounded-full"></div>
                  <p className="text-orange-300 font-bold text-xs tracking-wider uppercase mb-1">{member.role}</p>
                  <h4 className="text-2xl font-bold mb-3">{member.name}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;