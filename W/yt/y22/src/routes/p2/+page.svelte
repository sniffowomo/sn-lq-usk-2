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
  let count2 = $state(0)
  let delay = $state(1000)

  $effect(() => {
    const interval = setInterval(() => count2++, delay)
    // Cleaner function since delay is being set every time
    return () => clearInterval(interval)
  })
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
    <div>
      <h3>Effects Edge Case Study</h3>
      <p style:padding="2rem">Effect will make the timer go faster or slower</p>
      <p class="p2" style:padding="2rem" style:font-size="3rem">
        Interval: {delay} ms = {count2}
      </p>
      <button class="nav-btn" onclick={() => (delay *= 2)}>
        Slower : {delay}
      </button>
      <button class="nav-btn" onclick={() => (delay /= 2)}>
        Faster : {delay}</button
      >
      <button class="nav-btn" onclick={() => (delay = 1000)}>
        Reset : {delay}</button
      >
    </div>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
