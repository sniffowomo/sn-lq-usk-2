<script>
  // --- Imports Section ---
  import { onDestroy, onMount, untrack } from 'svelte'

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

  // --- Dependency Tracking in array ---
  let obj = $state({ current: 0 })
  let arr = $state([])

  // The correct way is to use inspect
  $inspect(obj, arr)

  // Effect on the above objects
  $effect(() => {
    console.log(obj.current)
    // Now storing this object inside local storage then can the whole object will be tracked
    localStorage.setItem('obj', JSON.stringify(obj))
  })

  // Effect on the above array
  $effect(() => {
    console.log(arr)
  })

  $effect(() => {
    console.log(arr.length)
  })

  // -- Using Effect to synchronize state ---
  let count5 = $state(0)
  let double5 = $state(0)

  $effect(() => {
    double5 = count5 * 2
  })

  // -- onMount function to run something once ---
  onMount(() => {
    console.log('Component Fucked')
    // return function
    return () => console.table('  Component Removed')
  })

  // Cleaner function
  onDestroy(() => {
    console.log('Component Raped')
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

  <!-- Dont track value inside effect - Vid- 41:@7 onwards  -->
  <div class="glass-card">
    <h3>Dependency Tracking</h3>
    <button
      class="nav-btn"
      onclick={() => {
        obj.current++
        arr.push(1)
      }}
    >
      Update
    </button>
  </div>

  <!-- Dont track value inside effect - Vid- 41:@7 onwards  -->
  <div class="glass-card">
    <h3>Not using effect to synchronize state</h3>

    <button
      class="nav-btn"
      onclick={() => {
        count5++
        console.log({ count, double5 })
      }}
    >
      {double5}
    </button>
  </div>

  <!-- OnMount Lifecycle Function - Vid 46:01 -->
  <div class="glass-card">
    <h3>OnMount Lifecycle Function</h3>
    <p>
      These discussion on why you dont need effects , because of onMount
      lifecycle function - Want to run something once and then run run a
      clearner functin when removed from dom
    </p>
    <p>
      When to use effects, should be used as a last resort , when you need to
      synchronize with some external system that doesnt understand svelte
      reactivity Example
      <li>Fetching data an api Working with dom directrly</li>
    </p>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
