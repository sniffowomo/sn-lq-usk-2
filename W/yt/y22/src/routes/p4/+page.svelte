<!-- 
 P4 // P4 // P4
 P4 // P4 // P4
 P4 // P4 // P4
 $state() inside functions and classes and inside $derive()
-->

<script>
  // ---F1 Function for illuistrating $state() inside a function ---
  function createCounter(initial) {
    let count = $state(initial)
    return { count }
  }

  let counter = createCounter(0)
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <!-- Title ZOne -->
  <h1>p4 - State inside functions and classes</h1>
  <p>
    [53:46] of dl vid <a
      href="https://youtu.be/B2MhkPtBWs4?si=r0ZmkaMXq_-N0rGr"
      target="_blank">yTDL</a
    >
  </p>
  <div class="tech-divider"></div>

  <!-- ---F1 Funnction Call -->
  <div class="glass-card">
    <h3>F1 - Counter Function Work</h3>

    <!-- Button for incrementing counter -->
    <p>
      THe Buttton below , show count incrments usiing getter and property
      accessors
    </p>
    <button
      class="nav-btn"
      onclick={() => {
        counter.count++
      }}
    >
      {counter.count}
    </button>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>

<!-- Page specific styles here -->
<style>
  p {
    padding: 2rem;
  }
</style>
