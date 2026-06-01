<!-- This is the lesson6 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd1 from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  let count = $state(0)
  let condition = $state(false)

  $effect(() => {
    if (condition) {
      console.log('Count is going to be tracked', count)
    }
  })
</script>

<div class="flex">
  <!-- ////// Main Start Tag ///// -->
  <Navz />

  <h1>Lesson 6 - Side Effects</h1>
  <p class="p2">
    Working with <code>$effect()</code> rune which is supposed to be ane escape hatch
  </p>
  <Wvd2 />

  <div class="flex2">
    <button class="btn" onclick={() => count++}> Buto </button>
    <button class="btn" onclick={() => (condition = !condition)}>
      Condition
    </button>
    <p>Conditiion = {condition}</p>
  </div>
  <Wvd1 />

  <!-- ////// Main Body End Tag ///// -->
</div>
