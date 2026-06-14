<script>
  import { enhance } from '$app/forms'
  let { form } = $props()
</script>

<form method="POST" action="?/getGif" use:enhance>
  <button type="submit" class="nav-btn">Random GIF</button>
</form>

{#if form?.error}
  <p style="color:red">Error: {form.error}</p>
{/if}

{#if form?.gifUrl}
  <img src={form.gifUrl} alt="GIF" />
{/if}
