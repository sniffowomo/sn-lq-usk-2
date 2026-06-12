<!-- 
 Using effects by querying api
-->

<script>
  let pokemon = $state('baguna')
  let image = $state('')
</script>

<main>
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->
  <!-- //// Starting tag dont touch //// -->

  <h1>Effects Study 2</h1>
  <div class="tech-divider"></div>

  <div class="glass-card">
    <h3>Pokemon Search function</h3>

    <!-- Input Search -->
    <div class="stack">
      <input
        type="search"
        class="input-glass"
        placeholder="Enter PantyMon Name"
        oninput={(e) => (pokemon = e.target.value)}
      />

      <img src={image} alt="PantyMon" />
    </div>
  </div>

  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
  <!-- //// Ending tag dont touch //// -->
</main>
