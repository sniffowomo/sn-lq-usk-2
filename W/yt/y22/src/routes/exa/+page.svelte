<!-- +page.svelte - COMPLETELY WORKING VERSION -->
<script>
  // Svelte 5 runes
  let clickCount = $state(0)

  function handleClick() {
    clickCount++
    alert(`Neon button clicked ${clickCount} times! 🟢`)
  }

  // ALL code stored as variables to avoid Svelte parsing errors
  const basicCode = `const greeting = "Hello Synthwave!";
console.log(greeting);`

  const exampleCode = `function greet() {
  console.log("Welcome to Synthwave!");
  return "Hello, Cyberpunk World! 🌟";
}

greet();`

  // THIS IS THE FIX - store code with curly braces in a variable
  const jsCode = `// Neon button handler (Svelte 5 style)
function handleClick() {
  console.log('💚 Neon pulse detected!');
}`

  const htmlCode = `<div class="glass-card">
  <h3>Frosted Glass</h3>
  <p>Content with blur effect</p>
</div>`

  const svelte5Code = `// User data (Svelte 5)
let user = $state({
  name: "CyberPilot",
  level: 42,
  theme: "Synthwave Green"
});`
</script>

<main>
  <h1>Synthwave Green Theme</h1>
  <h2>Frosted Glass & Neon Dreams</h2>
  <h3>Techy Futuristic Interface</h3>

  <div class="tech-divider"></div>

  <!-- GLASS CARDS -->
  <div class="glass-card">
    <h2>✨ Glass Card Example</h2>
    <p>This is a basic glass card with frosted effect.</p>
    <p>Click count: {clickCount}</p>
    <button class="nav-btn" onclick={handleClick}>Click Me!</button>
  </div>

  <div class="tech-divider"></div>

  <!-- BUTTONS -->
  <h2>Navigation Buttons</h2>
  <div class="button-group">
    <button class="nav-btn">Home</button>
    <button class="nav-btn-outline">Projects</button>
    <button class="nav-btn">About</button>
  </div>

  <div class="tech-divider"></div>

  <!-- CODE EXAMPLES - ALL WORKING -->
  <h2>Code Examples</h2>

  <!-- Basic code -->
  <div class="code-wrapper">
    <pre><code>{basicCode}</code></pre>
  </div>

  <!-- With line numbers -->
  <div class="code-wrapper" data-line-numbers>
    <pre><code>{exampleCode}</code></pre>
  </div>

  <!-- JavaScript with curly braces - WORKING NOW -->
  <div class="code-wrapper" data-line-numbers>
    <pre><code>{jsCode}</code></pre>
  </div>

  <!-- HTML example -->
  <div class="code-wrapper">
    <pre><code>{htmlCode}</code></pre>
  </div>

  <div class="tech-divider"></div>

  <!-- SVELTE 5 REACTIVITY DEMO -->
  <div class="glass-card">
    <h3>🔄 Svelte 5 Reactivity Demo</h3>
    <p class="center-text">
      Count: <span class="neon-text">{clickCount}</span>
    </p>
    <div class="button-group">
      <button class="nav-btn" onclick={() => clickCount++}>Increment</button>
      <button class="nav-btn-outline" onclick={() => (clickCount = 0)}
        >Reset</button
      >
      <button class="nav-btn" onclick={() => clickCount--}>Decrement</button>
    </div>
    {#if clickCount > 5}
      <p class="neon-text">🎉 You're on fire! 🎉</p>
    {/if}
  </div>

  <div class="tech-divider"></div>

  <!-- Svelte 5 code example -->
  <div class="glass-card">
    <h3>⚡ Svelte 5 Code</h3>
    <div class="code-wrapper">
      <pre><code>{svelte5Code}</code></pre>
    </div>
  </div>

  <!-- Regular link -->
  <a href="/home">Regular Link with cool underline</a>

  <!-- Link as button -->
  <a href="/dashboard" class="link-btn">Dashboard</a>

  <!-- Outlined link button -->
  <a href="/profile" class="link-btn-outline">Profile</a>

  <!-- Glowing link -->
  <a href="/neon" class="link-glow">Neon Link</a>

  <!-- Underline animation link -->
  <a href="/about" class="link-underline">About Us</a>

  <!-- Cyberpunk bracketed link -->
  <a href="/cyber" class="link-cyber">Cyber Link</a>

  <!-- Button group with mixed buttons and links -->
  <div class="button-group">
    <button class="nav-btn">Button</button>
    <a href="/page" class="link-btn">Link Button</a>
    <a href="/external" class="link-btn-outline">External</a>
  </div>
</main>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin: 0.5rem 0;
    color: var(--text-secondary);
  }

  li::before {
    content: '▹';
    color: var(--neon-green);
    margin-right: 0.5rem;
  }

  .center-text {
    text-align: center;
  }
</style>
