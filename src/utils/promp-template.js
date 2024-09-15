import { PromptTemplate } from "@langchain/core/prompts";

const template = ` Use the following pieces of context to answer the question at the end.
// If you don't know the answer from the context, just say that you don't know, don't try to make up an answer give the exact what is in the context.
give responsive html output if possible with strong italic paragraphs were needed.
at last you must write source: and provide the source link within <a class="text-blue-400"></a> tag.
Always must answer in the same language as the question.
{context}

Question: {question}

Helpful Answer:`;

const promptTemplate = PromptTemplate.fromTemplate(template);

export {promptTemplate};