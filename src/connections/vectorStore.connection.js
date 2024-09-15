import { ElasticVectorSearch } from "@langchain/community/vectorstores/elasticsearch";
import { Client } from "@elastic/elasticsearch";
import { embedderModel } from "../ml-models/embedder.model.js";
const elasticConfig = {
  node: process.env.ELASTIC_URL,
  auth: {
    apiKey: process.env.ELASTIC_API_KEY,
  },
};

const elasticClientArgs = {
  client: new Client(elasticConfig),
  indexName: [],
  indexMapping: {
    properties: {
      pageContent: {
        type: "text",
      },
      metadata: {
        type: "object",
      },
    },
  },
  batchSize: 100,
  verbose: true,
};


const initVectorStore = async (index) => {
  elasticClientArgs.indexName = index;
  const vectorStore = new ElasticVectorSearch(embedderModel, elasticClientArgs);
  return vectorStore;
};


export { initVectorStore };
