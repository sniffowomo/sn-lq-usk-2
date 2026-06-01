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

  // Edge case when effect wont track
  let count2 = $state(0)
  let delay = $state(1000)
  $effect(() => {
    const interval = setInterval(() => count2++, delay)
    return () => clearInterval(interval)
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

  <p class="p2">
    Example below the condition hutton changes to flase and the the console
    logging doesnt work this is done via effect
  </p>
  <div class="flex2">
    <button class="btn" onclick={() => count++}> Buto </button>
    <button class="btn" onclick={() => (condition = !condition)}>
      Condition
    </button>
    <p>Conditiion = {condition}</p>
  </div>
  <Wvd1 />

  <p class="p2">
    Clicking the button increases or decreases the delay , the effect runs every
    time on page, so the slower button was not working , this was solved by
    clearing the interval value
  </p>
  <div class="flex2">
    <button class="btn" onclick={() => (delay *= 2)}>Slower = {delay}</button>
    <code style="font-size:5rem; padding:2rem; background: black "
      >{count2}</code
    >
    <button class="btn" onclick={() => (delay /= 2)}>Faster = {delay}</button>
  </div>

  <!-- ////// Main Body End Tag ///// -->
</div>
