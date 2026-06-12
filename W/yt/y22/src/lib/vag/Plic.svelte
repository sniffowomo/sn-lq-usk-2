<script>
  let gifUrl = $state('')
  let loading = $state(false)

  async function getGif() {
    loading = true
    const res = await fetch('/hent')
    const data = await res.json()
    gifUrl = data.link
    loading = false
  }
</script>

<div class="stack">
  <button onclick={getGif} disabled={loading} class="nav-btn">
    {loading ? 'Loading...' : 'Get Hentai GIF'}
  </button>

  {#if gifUrl}
    <img src={gifUrl} alt="Hentai GIF" />
  {/if}
</div>
