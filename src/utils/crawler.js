import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { filterDoc } from "./filterDoc.js";
const crawlUrl = async (url, selector) => {
    const loader = new CheerioWebBaseLoader(url, {
        selector,
        transformElement: (element) => element('script, style').remove().text(),
    });

    try {
        const data = await loader.load();
        const filteredDoc = {
            ... data[0],
            pageContent: filterDoc(data[0].pageContent)+ " \n "+"source: "+data[0].metadata.source,
        }
        return filteredDoc;
    } catch (error) {
        console.error(`Error crawling ${url}:`, error);
        return null;
    }
};

const webCrawler = async (urls, selector) => {
    if (!Array.isArray(urls) || urls.length === 0) {
        throw new Error("URLs must be a non-empty array");
    }

    const crawlPromises = urls.map((url) => crawlUrl(url, selector));
    const results = await Promise.all(crawlPromises);

    return results.filter(result => result !== null);
};

export default webCrawler;