<!-- 
 Using effects by querying api
-->

<script>
  // --- Imports --
  import { getAbortSignal } from 'svelte'
  import Plic from '$lib/vag/Plic.svelte'
  import { gsap } from 'gsap'
  import { Flip } from 'gsap/Flip'

  // -- vars ---
  let { form } = $props()

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

  // --- Gsap effets pre code ---
  gsap.registerPlugin(Flip)

  let items = $state([...Array(10).keys()])

  function shuffle() {
    items = items.toSorted(() => Math.random() - 0.5)
  }

  $effect.pre(() => {
    items
    const state = Flip.getState('.flipboard-numbers > span')
    queueMicrotask(() => {
      Flip.from(state, {
        duration: 1,
        stagger: 0.01,
        ease: 'power1.inOut',
      })
    })
  })
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>Effects Study 2</h1>
  <div class="tech-divider"></div>

  <!-- Gsap animation flip here -->
  <div class="glass-card">
    <h3>
      <code>effects.pre</code> Need to do something before the dom updates
    </h3>

    <div class="stack">
      <div class="flipboard-numbers">
        {#each items as item (item)}
          <span>{item}</span>
        {/each}
      </div>
      <button
        class="nav-btn"
        onclick={shuffle}
        style="padding: 2rem; font-size: 2rem; margin-top: 1rem; border-radius: 99px;"
      >
        Shuffle</button
      >
    </div>
  </div>

  <!-- Fetching and effects of pokemon -->
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

  <!-- Testing you own fetch gif here -->
  <div class="glass-card">
    <h3>Testing My own Api Call method</h3>
    <Plic {form} />
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
