import webCrawler from "../utils/crawler.js";
import splitter from "../utils/text-splitter.js";
import { initVectorStore } from "../connections/vectorStore.connection.js";

const vectorStore = await initVectorStore("doj");


const embedWebpageController = async (req, res) => {
  try {
    const { urls } = req.body;
    const docs = await webCrawler(urls, "main");
    // const chunks = await splitter(docs);
    const embeds = await vectorStore.addDocuments(docs);

    res.status(200).json({
      message: "Documents successfully embedded",
      count: docs.length,
      embeds,
    });
  } catch (error) {
    console.error("Error in embedWebpageController:", error);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};

export { embedWebpageController };
