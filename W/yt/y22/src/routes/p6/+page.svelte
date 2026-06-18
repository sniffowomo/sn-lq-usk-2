<!--
P6- Focus on Signals - Explaining how signals work
1. What is Signal - Bascially container holds values and subscribers
-->

<script>
  import { onMount } from 'svelte'

  //g1 - Implementing Signals

  let activeEffect = null

  function state(value) {
    const signal = {
      value,
      subscribers: new Set(),
    }
    return signal
  }

  function effect(fn) {
    activeEffect = fn
    fn()
  }

  function get(signal) {
    signal.subscribers.add(activeEffect)
    return signal.value
  }

  function set(signal, value) {
    signal.value = value
    signal.subscribers.forEach((effect) => effect())
  }

  onMount(() => {
    let count = state(0)
    let btn = document.querySelector('button')
    btn.onclick = () => set(count, get(count) + 1)
    effect(() => (btn.textContent = get(count)))
  })
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>p6 - Signals</h1>
  <p>
    <a
      href="https://youtu.be/B2MhkPtBWs4?si=CTlXN7QOkEAty-24&t=4351"
      target="_blank">yTDL</a
    >
  </p>
  <div class="tech-divider"></div>

  <div class="glass-card">
    <h3>Signals in JS</h3>
    <p>Button which use the custom signal made earlier</p>
    <button class="nav-btn">0</button>
  </div>

  <!-- //// END //// -->
  <!-- //// END //// -->
  <!-- //// END //// -->
</main>

<style>
  p {
    padding: 2rem;
  }
</style>
