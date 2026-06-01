<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Derived state
  let count = $state(0)
  let factor = $state(0)
  let result = $derived(count * factor)
</script>

<div class="flex">
  <Navz />

  <h1>Lesson 4 - More Reactivity</h1>
  <p class="p2">Adding more work on top of l3</p>
  <Wvd2 />

  <p class="p2">
    Below we will multipled the states , the 'results' is the derived
  </p>
  <p style="font-size: 2rem">Result is {count} * {factor} = {result}</p>
  <button class="btn" onclick={() => count++}>Count: {count}</button>
  <button class="btn" onclick={() => factor++}>Factor: {factor}</button>
</div>
