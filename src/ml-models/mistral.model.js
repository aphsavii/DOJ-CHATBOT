import { HuggingFaceInference } from "@langchain/community/llms/hf";

const LLM = new HuggingFaceInference({
    model: "google/gemma-2-2b-it",
    apiKey: process.env.HUGGINGFACEHUB_API_KEY, 
    maxTokens: 2000,
  });

export default LLM;