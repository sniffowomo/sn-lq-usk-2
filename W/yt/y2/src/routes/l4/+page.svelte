<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd1 from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Derived state
  let count = $state(0)
  let factor = $state(0)
  let result = $derived(count * factor)

  let count2 = $state(0)
  let max = $derived(count2 >= 4)
  $inspect(max)

  // More work on derived
  let count3 = $state(0)
  let max2 = $derived(limit())

  function limit() {
    return count > 4
  }
</script>

<div class="flex">
  <!-- ////// Main Start Tag ///// -->
  <Navz />

  <h1>Lesson 4 - More Reactivity</h1>
  <p class="p2">Adding more work on top of l3</p>
  <Wvd2 />

  <!-- Testing Derived values here -->
  <p class="p2">
    Below we will multipled the states , the 'results' is the derived
  </p>
  <div class="flex2">
    <p style="font-size: 2rem">Result is {count} * {factor} = {result}</p>
    <button class="btn" onclick={() => count++}>Count: {count}</button>
    <button class="btn" onclick={() => factor++}>Factor: {factor}</button>
  </div>

  <Wvd1 />
  <!-- Testing Ley Loading here  -->
  <p class="p2">Derived lazy Loading testing here</p>
  <button class="btn" onclick={() => count2++} disabled={max}
    >Count: {count2}</button
  >

  <!-- ////// Main Body End Tag ///// -->
</div>
