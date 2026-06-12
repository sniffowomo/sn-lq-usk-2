export async function GET() {
  const res = await fetch('https://api.purrbot.site/v2/img/nsfw/pussylick/gif')
  const data = await res.json()
  return Response.json({ link: data.link })
}
