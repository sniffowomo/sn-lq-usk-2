<script>
  import Wvd from '$lib/panty/WavDiv.svelte'

  let count = $state(0)
</script>

<div class="flex">
  <h1>y2 Tutorial on sv5 complete beginner to be done before svk full</h1>

  <Wvd />

  <p>Simple button Loading below</p>

  <p>Yuo are clicking</p>
  <button class="btn" onclick={() => count++}> {count}</button>

  <Wvd />
</div>
