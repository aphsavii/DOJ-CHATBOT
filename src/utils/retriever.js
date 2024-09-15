import { initVectorStore  } from "../connections/vectorStore.connection.js";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { promptTemplate } from "./promp-template.js";
import LLM from "../ml-models/mistral.model.js";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";


async function* retrieve(query,index) {
  const vectorStore = await initVectorStore(index);
  const retriever = vectorStore.asRetriever({ k:10, searchKwargs: { nprobe: 10 }, searchType: "cosine" });
  const context = await retriever.invoke(query);
  
  const enhancedContext = context.map((retrievedDoc) => {
    retrievedDoc.pageContent += "\n source : " + retrievedDoc.metadata.source;
    return {
      ...retrievedDoc,
    };
  });
  console.log("Retrieved context:", enhancedContext);

  const retrieverChain = await createStuffDocumentsChain({
    llm: LLM,
    prompt: promptTemplate,
    outputParser: new StringOutputParser(),
  });
  
  const response = await retrieverChain.stream({
    question: query,
    context: enhancedContext,
  });

  for await (const chunk of response) {
    yield {
      query,
      answer: chunk,
    };
  }
}

export default retrieve;