import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";

const embedderModel = new HuggingFaceTransformersEmbeddings({
  model: "Xenova/all-MiniLM-L6-v2",
});


export {embedderModel};