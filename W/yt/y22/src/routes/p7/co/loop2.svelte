<!-- 
 loop2.svelte - Same as loop1.svelte but wih styles
 -->
<script>
  let fetishes = $state([
    { id: 1, fetish: 'pussy', done: false },
    { id: 2, fetish: 'ass', done: true },
    { id: 3, fetish: 'armpit', done: false },
    { id: 4, fetish: 'panty', done: true },
    { id: 5, fetish: 'panty', done: true },
  ])
</script>

<div class="loop-container">
  <!-- Glass card 1 - Basic list -->
  <div class="glass-card">
    <h3>📋 Basic List</h3>
    <p
      class="p2"
      style="font-size:1rem; text-shadow: 0 0 10px rgba(0,255,136,0.3);"
    >
      The following list is showing up because there is an array state defined
      above
    </p>

    <ul class="fetish-list">
      {#each fetishes as fetish}
        <li class="fetish-item">
          <label class="checkbox-container">
            <input type="checkbox" checked={fetish.done} />
            <span class="checkmark"></span>
          </label>
          <span class="fetish-name" class:done={fetish.done}>
            {fetish.fetish}
          </span>
          <span class="fetish-status" class:done={fetish.done}>
            {fetish.done ? '✓' : '○'}
          </span>
        </li>
      {:else}
        <p class="empty-message">No items found</p>
      {/each}
    </ul>
  </div>

  <!-- Glass card 2 - Destructured list -->
  <div class="glass-card">
    <h3>🔀 Destructured List</h3>
    <p
      class="p2"
      style="font-size:1rem; text-shadow: 0 0 10px rgba(0,255,136,0.3);"
    >
      The following list below has some destructuring
    </p>

    <ul class="fetish-list destructured">
      {#each fetishes as { id, fetish, done }, i (id)}
        <li class="fetish-item" class:even={i % 2 === 0}>
          <span class="item-index">#{i + 1}</span>
          <label class="checkbox-container">
            <input type="checkbox" checked={done} />
            <span class="checkmark"></span>
          </label>
          <span
            class="fetish-name"
            class:done
            style:color={i % 2 === 0
              ? 'var(--neon-green)'
              : 'var(--cyan-accent)'}
          >
            {fetish}
          </span>
          <span class="item-id">ID: {id}</span>
        </li>
      {:else}
        <p class="empty-message">No items found</p>
      {/each}
    </ul>
  </div>
</div>
