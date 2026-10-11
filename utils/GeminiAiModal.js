import "server-only";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-3.8-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const MAX_RETRIES = 2;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Stateless: setiap panggilan berdiri sendiri, supaya riwayat chat tidak tercampur antar user di server
export async function generateJson(prompt) {
  let result;
  for (let attempt = 0; ; attempt++) {
    try {
      result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
        safetySettings,
      });
      break;
    } catch (error) {
      // 503 (model sedang sibuk) & 429 (rate limit) biasanya sementara, jadi dicoba ulang
      const isTemporary = error?.status === 503 || error?.status === 429;
      if (!isTemporary || attempt >= MAX_RETRIES) throw error;
      await sleep(2000 * (attempt + 1));
    }
  }
  const text = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(text);
}
