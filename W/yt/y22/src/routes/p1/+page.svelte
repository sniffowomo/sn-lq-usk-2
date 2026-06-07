<script>
  let count = $state(0)

  let codeContent = `
  <code> Code Content Test </code>
  `

  // Section on editor state
  let editor = $state({
    content: `BotySniff`,
  })
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <div class="button-group">
    <a href="/" class="link-btn">Home </a>
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
    textarea
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>

<style>
  .nav-btn {
    padding: 1.2rem;
    font-size: 2rem;
  }
</style>
