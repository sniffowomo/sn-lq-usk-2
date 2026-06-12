export const actions = {
  getGif: async () => {
    // This runs on the server - NO CORS issues!
    const res = await fetch(
      'https://api.purrbot.site/v2/img/nsfw/pussylick/gif',
    )
    const data = await res.json()
    return { gifUrl: data.link }
  },
}
