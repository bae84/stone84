import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key가 설정되지 않았습니다. 관리자에게 문의하세요.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `
          당신은 '마일스톤 감정평가법인(Milestone Appraisal Corp)'의 수석 AI 컨설턴트입니다. 
          사용자의 질문에 대해 전문적이고, 정중하며, 신뢰감 있는 어조로 답변하세요.
          
          당신의 역할:
          1. 감정평가 절차, 수수료 체계(일반적인 기준), 필요 서류 등에 대한 안내.
          2. 상속세, 증여세, 도시정비사업, 보상평가 관련 전문적인 이점 설명.
          3. 부동산 시장 동향에 대한 일반적인 견해(투자가 아닌 분석 관점).
          
          제약사항:
          - 구체적인 감정평가액(금액)을 확정지어 말하지 마세요. "예상 감정가는 정식 의뢰 후 분석이 필요합니다"라고 안내하세요.
          - 법적 분쟁에 대한 확답은 피하고 전문가 상담을 권유하세요.
          - 답변은 300자 이내로 핵심만 요약하여 가독성 있게 작성하세요.
          - 한국어로 답변하세요.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 서비스 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.";
  }
};