<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'
  import Wvd3 from '$lib/panty/WaveDiv3.svelte'

  //    Work zone
  let title = 'Panty'
</script>

<div class="flex">
  <!-- nav zone -->
  <Wvd3
    thickness={1}
    bumpThickness={2}
    bumpWidth={240}
    glow={24}
    speed={6}
    breatheSpeed={12.5}
  />
  <a class="btn" href="/"> Home </a>
  <Wvd3
    thickness={1}
    bumpThickness={2}
    bumpWidth={240}
    glow={24}
    speed={6}
    breatheSpeed={2.5}
  />

  <h1>Lesson 1 - Route</h1>
  <Wvd2 />

  <!-- Work zone -->
  <p>Testing the templating</p>
  <h1>{title}</h1>
</div>
