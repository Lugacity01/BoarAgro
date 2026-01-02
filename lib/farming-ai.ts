// lib/farming-ai.ts

export async function farmingAI(userInput: string) {
  const res = await fetch("/api/farming-ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });

  if (!res.ok) {
    return {
      text: "Sorry, something went wrong. Please try again.",
    };
  }

  return await res.json();
}
