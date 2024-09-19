import { ChatOllama } from "@langchain/ollama";

const LLM = new ChatOllama({
  model: "gemma2:2b",
  temperature: 0,
  maxRetries: 2,
  baseUrl: "http://localhost:11434"
});

export default LLM;