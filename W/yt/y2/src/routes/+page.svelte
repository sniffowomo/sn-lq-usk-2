<script>
  import Wvd from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'
  import Wvd3 from '$lib/panty/WaveDiv3.svelte'

  let count = $state(0)
</script>

<div class="flex">
  <h1>y2 Tutorial on sv5 complete beginner to be done before svk full</h1>

  <Wvd2 speed={5} glow={8} thickness={5} breatheSpeed={8} hueSpeed={6} />

  <p>Simple button Loading below</p>

  <p>Yuo are clicking</p>
  <button class="btn" onclick={() => count++}> {count}</button>

  <Wvd />

  <Wvd3
    thickness={0.5}
    bumpThickness={4}
    bumpWidth={320}
    glow={32}
    speed={5}
    breatheSpeed={2}
  />
</div>
