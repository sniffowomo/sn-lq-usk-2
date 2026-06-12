<!-- 
 Using effects by querying api
-->

<script>
  import { getAbortSignal } from 'svelte'
  import Plic from '$lib/vag/Plic.svelte'

  let pokemon = $state('charizard')
  let image = $state('')
  let error = $state('')

  // Async function which is idiomatic
  async function getPokemon(pokemon) {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch(`${baseUrl}/${pokemon}`, {
      signal: getAbortSignal(),
    })
    if (!response.ok) throw new Error('OOPZ')
    return response.json()
  }

  // Above function now needs an effect
  $effect(() => {
    error = '' // Clear error before each request
    getPokemon(pokemon)
      .then((data) => {
        image = data.sprites.front_default
      })
      .catch((err) => {
        error = `Pokemon "${pokemon}" not found!` // Show error message
        image = '' // Clear image
      })
  })

  // Testing own API end point
  let gifUrl = $state('')
  let loading = $state(false)

  async function getGif() {
    loading = true
    const res = await fetch(
      'https://api.purrbot.site/v2/img/nsfw/pussylick/gif',
    )
    const data = await res.json()
    gifUrl = data.link
    loading = false
  }
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>Effects Study 2</h1>
  <div class="tech-divider"></div>

  <div class="glass-card">
    <h3>Pokemon Search function</h3>
    <p style:padding="1rem">
      As you type the name of the pokemon it will start showing up
    </p>

    <!-- Input Search -->
    <div class="stack">
      <input
        type="search"
        class="input-glass"
        placeholder="Enter PantyMon Name"
        oninput={(e) => (pokemon = e.target.value)}
      />

      {#if error}
        <div style="color: red; padding: 0.5rem;">{error}</div>
      {:else if image}
        <img src={image} alt="PantyMon" style:width="300px" />
      {/if}
    </div>
  </div>

  <div class="glass-card">
    <h3>Testing My own Api Call method</h3>
    <Plic />
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
