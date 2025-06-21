require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAi = new GoogleGenerativeAI(process.env.API_KEY);
console.log('api ->',process.env.API_KEY)
const model = genAi.getGenerativeModel({
  model: "gemini-2.5-flash",
});
async function generateResume(req, res) {
  try {
    const {prompt} = req.body

console.log('prompt given :',prompt)
    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    //   tools: [
    //     {
    //       responseSchema: {
    //         type: "object",
    //         properties: {
    //           basics: {
    //             type: "object",
    //             properties: {
    //               name: { type: "string" },
    //               label: { type: "string" },
    //               email: { type: "string" },
    //               phone: { type: "string" },
    //               location: {
    //                 type: "object",
    //                 properties: {
    //                   city: { type: "string" },
    //                   region: { type: "string" },
    //                   country: { type: "string" },
    //                 },
    //               },
    //               summary: { type: "string" },
    //             },
    //           },
    //           work: {
    //             type: "array",
    //             items: {
    //               type: "object",
    //               properties: {
    //                 company: { type: "string" },
    //                 position: { type: "string" },
    //                 startDate: { type: "string" },
    //                 endDate: { type: "string" },
    //                 summary: { type: "string" },
    //                 highlights: {
    //                   type: "array",
    //                   items: { type: "string" },
    //                 },
    //               },
    //             },
    //           },
    //           education: {
    //             type: "array",
    //             items: {
    //               type: "object",
    //               properties: {
    //                 institution: { type: "string" },
    //                 area: { type: "string" },
    //                 degree: { type: "string" },
    //                 startDate: { type: "string" },
    //                 endDate: { type: "string" },
    //               },
    //             },
    //           },
    //           skills: {
    //             type: "array",
    //             items: {
    //               type: "object",
    //               properties: {
    //                 name: { type: "string" },
    //                 keywords: {
    //                   type: "array",
    //                   items: { type: "string" },
    //                 },
    //               },
    //             },
    //           },
    //           certifications: {
    //             type: "array",
    //             items: {
    //               type: "object",
    //               properties: {
    //                 name: { type: "string" },
    //                 date: { type: "string" },
    //               },
    //             },
    //           },
    //           languages: {
    //             type: "array",
    //             items: {
    //               type: "object",
    //               properties: {
    //                 language: { type: "string" },
    //                 fluency: { type: "string" },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   ],
    });
    console.log('controll reached');
    console.log(response.response.candidates[0].content)
    const text = response.response.candidates[0].content.parts[0].text;
    const json = JSON.parse(text);
    return res.json(json);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}

module.exports = generateResume;
