import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { Send, Loader2, Sparkles, Bot, AlertCircle, Quote } from 'lucide-react';

const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState('');

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    setLastQuery(query);
    
    // Simulate thinking time for better UX if API is too fast
    const minTime = new Promise(resolve => setTimeout(resolve, 800));
    const apiCall = getAIResponse(query);
    
    const [result] = await Promise.all([apiCall, minTime]);
    
    setResponse(result);
    setLoading(false);
    setQuery(''); // Clear input after asking
  };

  const suggestions = [
    "상속세 감정평가 시 이점은 무엇인가요?",
    "재개발 구역의 종전자산 평가는 어떻게 하나요?",
    "보상평가 이의신청 절차가 궁금합니다.",
  ];

  return (
    <div className="animate-fadeIn min-h-screen bg-slate-900 flex flex-col">
       <div className="bg-slate-900 py-12 text-center border-b border-slate-800">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">AI CONSULTATION</h2>
        <p className="text-slate-400 text-lg">마일스톤 AI가 궁금증을 해결해드립니다</p>
      </div>

      <section className="flex-1 relative overflow-hidden flex items-center justify-center py-10">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 skew-x-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column: Chat Interface */}
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 shadow-xl">
                 <div className="mb-6">
                    <div className="inline-flex items-center gap-2 text-orange-400 mb-2">
                        <Sparkles size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Ask Milestone AI</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">무엇이든 물어보세요</h3>
                 </div>

                 <form onSubmit={handleAsk} className="relative group mb-6">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="질문을 입력해주세요.&#13;&#10;(예: 꼬마빌딩 증여 시 감정평가)"
                    className="w-full bg-slate-900 text-white placeholder-slate-500 border border-slate-600 rounded-2xl py-4 pl-4 pr-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-base leading-relaxed"
                  />
                  <button
                    type="submit"
                    disabled={loading || !query.trim()}
                    className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg gap-2 font-bold"
                  >
                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <>질문하기 <Send size={18} /></>}
                  </button>
                </form>

                <div>
                   <p className="text-slate-500 text-xs font-bold mb-3 uppercase tracking-wider">Recommended Questions</p>
                   <div className="flex flex-col gap-2">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(s)}
                        className="text-left text-xs text-slate-300 hover:text-orange-400 bg-slate-700/50 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-slate-600"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

               <div className="flex items-start gap-2 text-slate-500 text-xs bg-slate-800/30 p-4 rounded-xl">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <p>AI 답변은 참고용이며, 법적 효력이 없습니다. 정확한 견적은 정식 상담을 이용해주세요.</p>
               </div>
            </div>

            {/* Right Column: Response Area */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {response || loading ? (
                 <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col animate-fadeIn border border-slate-200">
                    {/* Header */}
                    <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                              <Bot size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">AI Consultant</p>
                            <p className="text-xs text-slate-500">Milestone Appraisal Corp.</p>
                          </div>
                       </div>
                       <div className="text-right hidden sm:block">
                          <p className="text-xs text-slate-400 font-medium">POWERED BY</p>
                          <p className="text-xs font-bold text-slate-600">Gemini 3.0</p>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 overflow-y-auto bg-white">
                        {loading ? (
                          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                             <div className="relative">
                               <div className="w-16 h-16 border-4 border-slate-100 border-t-orange-500 rounded-full animate-spin"></div>
                               <div className="absolute inset-0 flex items-center justify-center">
                                  <Sparkles size={20} className="text-orange-400 animate-pulse" />
                               </div>
                             </div>
                             <p className="animate-pulse font-medium">답변을 생성하고 있습니다...</p>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {lastQuery && (
                              <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 inline-block max-w-[90%]">
                                <p className="text-sm text-slate-500 font-bold mb-1">질문 내용:</p>
                                <p className="text-slate-800 font-medium italic">"{lastQuery}"</p>
                              </div>
                            )}
                            
                            <div className="prose prose-slate max-w-none">
                              <div className="flex gap-4">
                                <Quote className="text-orange-200 w-10 h-10 -mt-2 shrink-0 transform scale-x-[-1]" />
                                <div className="space-y-4">
                                   <p className="text-slate-700 leading-8 whitespace-pre-wrap text-lg">{response}</p>
                                </div>
                              </div>
                            </div>

                            <div className="pt-8 border-t border-slate-100 mt-8">
                               <p className="text-sm text-slate-400 text-center">추가적인 상담이 필요하신가요?</p>
                               <div className="flex justify-center mt-3">
                                  <a href="#contact" className="text-orange-500 font-bold hover:underline text-sm">전문가와 직접 상담하기 &rarr;</a>
                               </div>
                            </div>
                          </div>
                        )}
                    </div>
                 </div>
              ) : (
                /* Empty State */
                <div className="h-full min-h-[500px] rounded-3xl border-2 border-dashed border-slate-700 bg-slate-800/30 flex flex-col items-center justify-center text-center p-8">
                   <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                      <Sparkles className="text-slate-600" size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">AI 상담 준비 완료</h3>
                   <p className="text-slate-400 max-w-sm">좌측 입력창에 부동산 감정평가와 관련된<br/>궁금한 점을 자유롭게 물어보세요.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AIAdvisor;