import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "langchain/document";

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize:1000,
  chunkOverlap: 100,
  separators:["\n\n", "\n", " ", ""]
});

const splitter = async (docs) => {
  const documents = docs.flatMap(page => 
    page.map(doc => new Document({ pageContent: doc.pageContent, metadata: doc.metadata , id: doc.id }))
  );
  return await textSplitter.splitDocuments(documents);
};


export default splitter;