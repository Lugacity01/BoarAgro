import { OpenRouter } from "@openrouter/sdk";

export const runtime = "nodejs";
// export const dynamic = "force-dynamic";


const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response("Message is required", { status: 400 });
    }

    const stream = await openrouter.chat.send({
      model: "nex-agi/deepseek-v3.1-nex-n1:free",
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: `You are an agricultural AI assistant for BOAR Agro.`,
            },
          ],
        },
        {
          role: "user",
          content: [{ type: "text", text: message }],
        },
      ],
      stream: true,
    });

    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              const content =
                chunk?.choices?.[0]?.delta?.content;

              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            }
          } catch (err) {
            controller.enqueue(
              encoder.encode("\n[AI stream interrupted]")
            );
          } finally {
            controller.close();
          }
        },
      }),
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error("AI route error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
