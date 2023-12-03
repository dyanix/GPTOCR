import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import  Configuration from "openai"
// import { ChatCompletionRequestMessage, OpenAIApi } from "openai";
import OpenAI from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
interface ChatCompletionRequestMessage {
  role: string;
  content: string;
  // Add other properties as needed based on the actual structure
}

const openai = new OpenAI();
const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }
    if (!messages) {
        return new NextResponse("Messages are required", { status: 400 });
      }
  
      const freeTrial = await checkApiLimit();
      const isPro = await checkSubscription();
  
      if (!freeTrial && !isPro) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
      }
      if (!freeTrial ) {
        return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
      }
  
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [instructionMessage, ...messages]
      });
  
      if (!isPro) {
        await incrementApiLimit();
      }

    // await incrementApiLimit();
  
      return NextResponse.json(response.choices[0].message);
    } catch (error) {
      console.log('[CONVERSATION_ERROR]', error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  };