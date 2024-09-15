import { HuggingFaceInference } from "@langchain/community/llms/hf";

const LLM = new HuggingFaceInference({
    model: "mistralai/Mistral-Nemo-Instruct-2407",
    apiKey: process.env.HUGGINGFACEHUB_API_KEY, 
    maxTokens: 2000,
  });

export default LLM;