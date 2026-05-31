<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd1 from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Work Zone
  let colo = 'cyan'
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
</div>
