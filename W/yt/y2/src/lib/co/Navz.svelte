<script>
  import Wvd3 from '$lib/panty/WaveDiv3.svelte'
</script>

<Wvd3
  thickness={0.5}
  bumpThickness={2}
  bumpWidth={520}
  glow={32}
  speed={9}
  breatheSpeed={2}
/>
<div class="flex2">
  <a class="nav-btn" href="/"> Home </a>
  <a class="nav-btn" href="/l1"> L1 </a>
  <a class="nav-btn" href="/l2"> L2 </a>
  <a class="nav-btn" href="/l3"> L3 </a>
  <a class="nav-btn" href="/l4"> L4 </a>
  <a class="nav-btn" href="/l5"> L5 </a>
  <a class="nav-btn" href="/l6"> L6 </a>
</div>
<Wvd3
  thickness={0.5}
  bumpThickness={2}
  bumpWidth={520}
  glow={32}
  speed={9}
  breatheSpeed={2}
/>

<style>
  .flex2 {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
</style>
