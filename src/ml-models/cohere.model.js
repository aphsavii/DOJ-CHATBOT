import { ChatCohere } from "@langchain/cohere";

const LLM = new ChatCohere({
  model: "command-r-plus",
  temperature: 0.9,
  maxRetries: 2,
  apiKey: process.env.COHERE_API_KEY,
});

export default LLM;
