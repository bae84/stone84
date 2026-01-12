import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fadeIn">
       <div className="bg-slate-900 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">CONTACT US</h2>
        <p className="text-slate-400 text-lg">마일스톤 감정평가법인은 언제나 열려있습니다</p>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2 block">Get in Touch</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">상담 문의</h3>
                <p className="text-slate-600 leading-relaxed">
                  감정평가와 관련하여 궁금한 점이 있으신가요?<br/>
                  전문가가 직접 빠르고 정확하게 답변해드립니다.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform">
                  <div className="bg-white p-4 shadow-md rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Representative Number</p>
                    <p className="text-2xl font-bold text-slate-900">02-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform">
                  <div className="bg-white p-4 shadow-md rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Location</p>
                    <p className="text-lg text-slate-900 font-medium">서울특별시 강남구 테헤란로 123, 마일스톤타워 15층</p>
                  </div>
                </div>

                 <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform">
                  <div className="bg-white p-4 shadow-md rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Email</p>
                    <p className="text-lg text-slate-900 font-medium">contact@milestone.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group hover:translate-x-2 transition-transform">
                   <div className="bg-white p-4 shadow-md rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Business Hours</p>
                    <p className="text-slate-900 font-medium">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                    <p className="text-slate-500 text-sm mt-1">* 주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">빠른 상담 신청</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">이름</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all" placeholder="010-0000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">상담 분야</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all">
                    <option>상담 분야를 선택해주세요</option>
                    <option>담보 평가</option>
                    <option>경매/소송</option>
                    <option>상속/증여</option>
                    <option>도시정비/보상</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 h-40 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none transition-all" placeholder="문의하실 내용을 간략히 적어주세요."></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 text-lg">
                  상담 신청하기 <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded text-white flex items-center justify-center font-bold">M</div>
            <span className="text-white font-bold text-lg">MILESTONE</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Milestone Appraisal Corp. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;