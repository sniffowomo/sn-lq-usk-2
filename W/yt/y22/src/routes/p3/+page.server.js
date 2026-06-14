export const actions = {
  getGif: async () => {
    try {
      const res = await fetch(
        'https://api.purrbot.site/v2/img/nsfw/pussylick/gif',
      )

      if (!res.ok) {
        return { error: `API returned ${res.status}` }
      }

      const data = await res.json()

      if (!data.link) {
        return { error: 'No GIF link in response' }
      }

      return { gifUrl: data.link }
    } catch (err) {
      // This will show in your browser console
      return { error: err.message }
    }
  },
}
