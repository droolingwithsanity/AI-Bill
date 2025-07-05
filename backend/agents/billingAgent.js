import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { initializeAgentExecutor } from "langchain/agents";

const model = new OpenAI({ temperature: 0 });
const tools = [new SerpAPI()];

const executor = await initializeAgentExecutor(
  tools,
  model,
  "zero-shot-react-description"
);

const result = await executor.run(
  "Analyze this bill and compare to last month's charges: [BILL_JSON]"
);
