<!-- 
 p5 - About not using $effects() , Since SVK docs also recommend his 
 - This will have work for that being done
-->

<script>
  import { Counter } from '$lib/funcs/counter2.svelte'

  // F1 - Importin the counter4 function
  let counter = new Counter(0)
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>p5 - Avoding the use of <code>$effects()</code></h1>
  <p>
    [1:04:52] of dl vid <a
      href="https://youtu.be/B2MhkPtBWs4?si=pN1LT5_HmgjseU3f&t=3887"
      target="_blank">yTDL</a
    >
  </p>
  <div class="tech-divider"></div>

  <!-- F1 - Starting Work -->
  <div class="glass-card">
    <h3>Function 1 - Making complications with effects</h3>
    <p>This button below is linked to an imported counter function</p>

    <button class="nav-btn" onclick={() => counter.count++}>
      {counter.count}
    </button>
  </div>

  <!-- //// ENDING MAIN FUNCTION //// -->
  <!-- //// ENDING MAIN FUNCTION //// -->
  <!-- //// ENDING MAIN FUNCTION //// -->
</main>
