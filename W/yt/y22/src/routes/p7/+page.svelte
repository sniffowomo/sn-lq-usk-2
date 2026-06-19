<!-- 
p7 - Using logics in templates - Meaning adding functional statemenents inside html
-->

<script>
  // F1 - Loading states
  let status = $state('loading')

  function cycleStatus() {
    if (status === 'loading') {
      status = 'error'
    } else if (status === 'error') {
      status = 'success'
    } else if (status === 'success') {
      status = 'loading'
    }
  }
</script>

<main>
  <!-- //////Start Tag Start Tag Start Tag ////// -->
  <!-- //////Start Tag Start Tag Start Tag ////// -->
  <!-- //////Start Tag Start Tag Start Tag ////// -->

  <h1>p7 - Using logic in templates (html)</h1>
  <p>
    <a
      href="https://youtu.be/B2MhkPtBWs4?si=L9ZAH8cSe9nXuuMK&t=4763"
      target="_blank"
      >yTDL
    </a>
    TimeStamp Location - Capabilities of adding logic to html
  </p>
  <div class="tech-divider"></div>

  <!-- F1 - Using if blocks  -->
  <div class="glass-card">
    <h3>1 - Conditional Render of Components</h3>

    <p style:padding="1rem">Button change the state and subsequent message</p>
    <button class="nav-btn" onclick={cycleStatus}>
      Status: {status}
    </button>
    <button class="nav-btn" onclick={(status = 'other')}>
      other: {status}
    </button>
    <button class="nav-btn" onclick={(status = 'loading')}>
      Reset: {status}
    </button>

    <!-- Using conditiona for the status -->
    {#if status === 'loading'}
      <p style="padding:1rem; color:blue">Loading</p>
    {:else if status === 'success'}
      <p style="padding:1rem; color:green">Success</p>
    {:else if status === 'error'}
      <p style="padding:1rem; color:red">Error</p>
    {:else}
      <p style="padding:1rem; color:red; font-size:5rem">Fuck off</p>
    {/if}
  </div>

  <!-- F2 - Looping over blocks -->
  <div class="glass-card">
    <h3>F2 - Looping over blocks</h3>
  </div>

  <!-- ////// END MAN TAG ////// -->
  <!-- ////// END MAN TAG ////// -->
  <!-- ////// END MAN TAG ////// -->
</main>
