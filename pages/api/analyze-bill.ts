import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage } from 'langchain/schema';
import type { NextApiRequest, NextApiResponse } from 'next';

const model = new ChatOpenAI({ openAIApiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { description, amount } = JSON.parse(req.body);
  const response = await model.call([
    new HumanMessage(\`Analyze a bill: "\${description}" of \$\${amount}. Category and recommendations?\`)
  ]);
  res.status(200).json({ insights: response.text });
}
