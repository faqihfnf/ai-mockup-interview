const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
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

export const chatSession = model.startChat({
  generationConfig,
  safetySettings,
});

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//     safetySettings,
//     // history: [
//     //   {
//     //     role: "user",
//     //     parts: [
//     //       {
//     //         text: "Job Position : Full Stack Developer, Job Description: React, Nodejs, Nextjs, Years of Experience: 5, total question: 3,  interview language: Indonesia. depends on this information, please give me interview question with answered according to selected total question and interview language in JSON format. give question and answered as field in JSON",
//     //       },
//     //     ],
//     //   },
//     //   {
//     //     role: "model",
//     //     parts: [
//     //       {
//     //         text: '```json\n[\n  {\n    "question": "Ceritakan pengalaman Anda dalam membangun aplikasi web menggunakan React. Apa saja tantangan yang Anda hadapi dan bagaimana Anda mengatasinya?",\n    "answer": "Saya memiliki pengalaman selama 5 tahun dalam membangun aplikasi web menggunakan React. Saya telah mengerjakan berbagai proyek, mulai dari aplikasi sederhana hingga aplikasi kompleks yang membutuhkan integrasi dengan backend dan API. Salah satu tantangan yang saya hadapi adalah mengelola state aplikasi yang kompleks. Untuk mengatasi hal ini, saya menggunakan Redux dan Context API untuk mengatur state dengan lebih baik. Selain itu, saya juga sering menghadapi masalah dalam mengoptimalkan performa aplikasi. Untuk mengatasi hal ini, saya menggunakan berbagai teknik seperti code splitting, lazy loading, dan memoization."\n  },\n  {\n    "question": "Jelaskan bagaimana Anda menggunakan Node.js untuk membangun API RESTful yang efisien.",\n    "answer": "Saya menggunakan Node.js untuk membangun API RESTful yang efisien dengan memanfaatkan framework Express.js. Saya memilih Express.js karena framework ini mudah digunakan dan memiliki banyak middleware yang membantu dalam membangun API yang aman dan terstruktur. Saya juga menerapkan prinsip-prinsip REST API seperti penggunaan metode HTTP yang tepat, struktur URL yang jelas, dan dokumentasi API yang lengkap."\n  },\n  {\n    "question": "Apa keuntungan menggunakan Next.js dalam pengembangan aplikasi web dibandingkan dengan React biasa?",\n    "answer": "Next.js menawarkan beberapa keuntungan dibandingkan React biasa, seperti: \\n\\n- **Server-side rendering:** Next.js melakukan rendering di server, sehingga aplikasi dapat dimuat lebih cepat dan memiliki SEO yang lebih baik. \\n- **Routing yang mudah:** Next.js menyediakan sistem routing yang mudah digunakan dan membantu dalam membangun aplikasi yang lebih terstruktur. \\n- **Pre-rendering:** Next.js memungkinkan pre-rendering halaman, sehingga halaman dapat dimuat lebih cepat dan pengalaman pengguna lebih baik. \\n- **Static Site Generation (SSG):** Next.js mendukung SSG, sehingga halaman dapat di-generate secara statis dan di-deploy ke layanan hosting statis seperti Netlify atau Vercel."\n  }\n]\n``` \n',
//     //       },
//     //     ],
//     //   },
//     // ],
//   });

//   //   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   //   console.log(result.response.text());
// }

// run();
