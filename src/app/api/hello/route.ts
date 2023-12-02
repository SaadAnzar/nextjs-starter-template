export async function GET() {
  try {
    console.log("Api hit!")

    const intro = "Hello, My name is Md Anzar Ahmad!"

    return new Response(JSON.stringify(intro), { status: 200 })
  } catch (error) {
    return new Response("Failed to send the intro!", { status: 500 })
  }
}
