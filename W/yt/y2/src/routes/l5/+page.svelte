<!-- This is the lesson5 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Shopping cart Example
  let cart = $state([
    { item: '🍎', tt: 20 },
    { item: '🍌', tt: 10 },
  ])
  let total = $derived.by(() => {
    let sum = 0
    for (let item of cart) {
      sum += item.tt
    }
    return sum
  })
</script>

<div class="flex">
  <!-- ////// Main Start Tag ///// -->
  <Navz />

  <h1>Lesson 5 - Complex Reactivity</h1>
  <p class="p2">
    More Work with <code>$derived()</code> & <code>$state()</code>
  </p>
  <Wvd2 />

  <p class="p2">Working with arrays and getting total</p>

  <!-- Code for looping through array and printing -->
  <ul>
    {#each cart as i}
      <li>{i.item} has {i.tt}</li>
    {/each}
  </ul>

  <p>Total from Array: {total}</p>
  <Wvd2 />

  <p class="p2">Side Effects Rune</p>

  <!-- ////// Main Body End Tag ///// -->
</div>
