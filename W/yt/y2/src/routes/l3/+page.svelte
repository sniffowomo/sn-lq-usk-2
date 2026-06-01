<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Navz from '$lib/co/Navz.svelte'
  import Wvd1 from '$lib/panty/WavDiv.svelte'
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'

  // Application states and reactivity
  let count = $state(0)

  let editor = $state.raw({
    theme: 'dark',
    content: '<code> <i> Deeply reactive </i> </code>',
  })

  let { theme, content } = $state({
    theme: 'dark',
    content: '<code> <i> Deeply reactive </i> </code>',
  })
</script>

<div class="flex">
  <Navz />

  <h1>Lesson 3 - Reactivity</h1>
  <p class="p2">This section will focus on reacivity in svelte, from basics</p>
  <Wvd2 />

  <!-- Work zone -->
  <p class="p2">Button</p>
  <button class="btn" onclick={() => count++}> {count} </button>

  <Wvd1 />

  <p class="p2">Deeply reactive States</p>

  <!--
    Note: direct assignment inside markup is invalid. Use on:input to update
    the editor object by reassignment.
  -->
  <textarea
    class="editor"
    value={content}
    oninput={(e) => {
      content = e.target.value
    }}
  ></textarea>

  {@html content}

  <Wvd1 />
</div>
