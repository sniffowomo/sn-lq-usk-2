<!-- 
 P4 // P4 // P4
 P4 // P4 // P4
 P4 // P4 // P4
 $state() inside functions and classes and inside $derive()
-->

<script>
  import { Counter4 } from '$lib/funcs/counter.svelte'

  // ---F1 Function for illuistrating $state() inside a function ---
  function createCounter(initial) {
    let count = $state(initial)
    return {
      get count() {
        return count
      },
      set count(v) {
        count = v
      },
    }
  }

  let counter = createCounter(0)

  // ---F2 Function for illuistrating $state() inside a function  similar to above - Deeply reactive proxy---
  function createCounter2(initial) {
    let counter = $state({ count: initial })
    return counter
  }

  let counter2 = createCounter2(0)

  //  F3 - Making reactivity inside classes
  class Counter {
    constructor(initial) {
      this.count = $state(initial)
    }
  }
  let counter3 = new Counter(0)

  //  F4 - Importing counter class from lib/counter.svelte.js
  let counter4 = new Counter4(9)

  //F5 - Passing ractivity to functions aand classes

  // Making a doubler class
  class Doubler {
    constructor(count) {
      this.count = $derived(count() ** 2)
    }
  }
  let count5 = $state(0)
  let doubled = new Doubler(() => count5)
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

    <p>Second version of above using deep reactivityy</p>
    <button
      class="nav-btn"
      onclick={() => {
        counter2.count++
      }}
    >
      {counter2.count}
    </button>
  </div>

  <!-- Reactive states with classes, encouraged by Svelte -->
  <div class="glass-card">
    <h3>Deep Reactive state with Function Classes</h3>
    <p>Using function class</p>
    <button
      class="nav-btn"
      onclick={() => {
        counter3.count++
      }}
    >
      {counter3.count}
    </button>

    <p>Imorting the Counter4 function for lib/counter.svelte.js</p>
    <button
      class="nav-btn"
      onclick={() => {
        counter4.count++
      }}
    >
      {counter4.count}
    </button>
  </div>

  <!-- F45 Function work here - Passing state to functions and classes -->
  <div class="glass-card">
    <h3>Passing State to functions and classes</h3>

    <p>This button is for illustrating the class function F5</p>
    <button
      class="nav-btn"
      onclick={() => {
        count5++
      }}
    >
      {doubled.count}
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
