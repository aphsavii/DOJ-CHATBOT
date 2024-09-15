import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const LLM = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro",
  temperature: 0.5,
  maxRetries: 2,
  maxTokens: 3000,
});

export default LLM;