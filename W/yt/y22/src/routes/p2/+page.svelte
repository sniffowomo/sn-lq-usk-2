<script>
  // Effects1
  let count = $state(0)
  let condition = $state(false)

  $effect(() => {
    // track count only when condition is true , the condition is being changed with the button via onlick
    if (condition) {
      console.log(count)
    }
  })

  // Effect edge case using the interval example
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>Effects Study</h1>
  <div class="tech-divider"></div>

  <div class="glass-card">
    <h3>Effects Study 1</h3>

    <button class="nav-btn" onclick={() => count++}>Cliq : {count}</button>

    <p style:padding="2rem">Below is button is for testing condition</p>
    <button class="nav-btn" onclick={() => (condition = !condition)}
      >Conditon Toggle : {condition}</button
    >
  </div>

  <div class="glass-card">
    <h3>Effects Edge Case Study</h3>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
