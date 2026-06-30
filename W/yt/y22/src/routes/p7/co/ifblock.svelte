<!-- 
 ifblock.svelte - this is the if block which is going to be imported in +age.svelte
-->

<script>
  // F1 - Loading states
  let status = $state('loading')

  // Function that gets called by the button
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

<!-- Using conditiona for the status 
- Status appears below the buttons
-->
{#if status === 'loading'}
  <p style="padding:1rem; color:blue">Loading</p>
{:else if status === 'success'}
  <p style="padding:1rem; color:green">Success</p>
{:else if status === 'error'}
  <p style="padding:1rem; color:red">Error</p>
{:else}
  <p style="padding:1rem; color:red; font-size:2rem">Fuck off</p>
{/if}
