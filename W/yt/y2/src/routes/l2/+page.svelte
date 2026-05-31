<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd1 from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Work Zone
  let colo = 'cyan'

  let longvar = `
  <center>
  <code> This is long variable with raw html<code> <br>
  <i> this will be called with @render function </i>
  <center>
  `
  // Accordian thing
  let open = $state(false)
</script>

<div class="flex">
  <Navz />

  <h1>Lesson 2 - Components</h1>
  <Wvd2 />

  <!-- Work zone -->
  <p class="p2">
    Note the color below is being overrided by the main App.css , so its not
    visible, the color of the below text should be cyan
  </p>
  <h3 style:colo>Shor Hand Cooloring</h3>
  <Wvd1 />

  <p class="p2">Raw HTMl Rendering below from a variable</p>
  {@html longvar}
  <Wvd1 />

  <p class="p2">Testing some Accordian thing</p>

  <button class="btn2" onclick={() => (open = !open)}>
    <spam>Iteam a </spam>
    <spam class="trigger" class:open>Iteam b </spam>
    <spam>Iteam c </spam>
  </button>
</div>

<style>
  .trigger {
    display: inline-block;
    transition: rotate 0.2s ease;

    &.open {
      rotate: 90deg;
    }
  }
</style>
