<>
  let count = $state(0)

  let codeContent = `
  <code> Code Content Test </code>
  `

  // Section on editor state
  let editor = $state({
    content: `BotySniff`,
  })

  // Section on derived value testing
  let co1 = $state(0)
  let co2 = $state(0)
  let co3 = $derived(co1 + co2)

  // Section for complex derived states 
  let cart = $state([
    { item: ''} sd 
  ])
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <div class="button-group">
    <h1>Lesson 1 Work - Focus on reactivity</h1>
    <div class="tech-divider"></div>
  </div>

  <div class="glass-card">
    <h3 style:padding="0.2rem">But with onclick listener and own function</h3>
    <button class="nav-btn" onclick={() => count++}>
      Count: {count}
    </button>
    <p>This main</p>
    {@html codeContent}
  </div>

  <!-- Text area section test -->
  <div class="glass-card">
    <h3 style:padding="0.2rem">Text Area Input</h3>
    {@html editor.content}
    <textarea class="editor" bind:value={editor.content}> </textarea>
  </div>

  <!-- Derived Value testing -->
  <div class="glass-card">
    <h3>Derived Value Testing</h3>
    <div style:padding="1rem">
      <p class="p2">{co1} + {co2} = {co3}</p>
      <button onclick={() => co1++} class="nav-btn"> Count1 {co1} </button>
      <button onclick={() => co2++} class="nav-btn"> Count2 {co2} </button>
    </div>
  </div>

  <!-- Complex Derived States -->

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>

<style>
  .nav-btn {
    padding: 1.2rem;
    font-size: 1.2rem;
  }
</style>
