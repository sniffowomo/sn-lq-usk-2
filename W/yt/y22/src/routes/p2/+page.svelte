<script>
  // --- Imports Section ---
  import { untrack } from 'svelte'

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

  // Untrack values inside an effect
  let a1 = $state(0)
  let b1 = $state(0)
  let a1b1sum = $derived(a1 + b1)

  $effect(() => {
    console.log(untrack(() => a1) + b1)
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

  <!-- Effects Cleanup behavior  -->
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

  <!-- Dont track value inside effect  -->
  <div class="glass-card">
    <h3>Untrack Values inside an effect</h3>
    <button class="nav-btn" onclick={() => a1++}>A1: {a1}</button>
    <button class="nav-btn" onclick={() => b1++}>B1: {b1}</button>
    <button
      class="nav-btn"
      onclick={() => {
        ;(a1 = 0), (b1 = 0)
      }}>reset</button
    >
    <p class="p2" style:padding="2rem" style:font-size="3rem">
      Sum = {a1b1sum}
    </p>
    <p style:padding="2rem">
      Above example a1 is no tracked so even though we are pressing the button
      its not seen in console.log , ubut only when b1 starts incremeneting
      values then the sum is printed in console.log , but since you are calling
      the variable in the p tag its still visible
    </p>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
