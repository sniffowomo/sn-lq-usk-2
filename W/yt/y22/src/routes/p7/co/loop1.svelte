<!-- 
 loop1.svelte - this is the if block which is going to be imported in +age.svelte
-->

<script>
  // State Array of items
  let fetishes = $state([
    { id: 1, fetish: 'pussy', done: false },
    { id: 2, fetish: 'ass', done: true },
    { id: 3, fetish: 'armpit', done: false },
    { id: 4, fetish: 'panty', done: true },
  ])
</script>

<p>
  The following list is showing up because there is a array state defined above
  from that the list below is being made
</p>

<ul>
  {#each fetishes as fetish}
    <li>
      <input type="checkbox" checked={fetish.done} />
      <span>{fetish.fetish}</span>
    </li>
  {:else}
    <p>No Pussy</p>
  {/each}
</ul>

<!-- Destructuring -->
<p>The following list below has some desturing</p>

<ul>
  {#each fetishes as { id, fetish, done }, i (id)}
    <li>
      <input type="checkbox" checked={done} />
      <span style:color={i % 2 == 0 ? 'yellowgreen' : ''}>{fetish}</span>
    </li>
  {:else}
    <p>No Pussy</p>
  {/each}
</ul>
