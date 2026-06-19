<!-- 
p7 - Using logics in templates - Meaning adding functional statemenents inside html
-->

<script>
  // ifblock code written seperately and imported
  import Ifb from './co/ifblock.svelte'

  // Loops - Note that lop2 is jus stylized fromn of Lo1
  import Lo1 from './co/loop1.svelte'
  import Lo2 from './co/loop2.svelte'
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
    <Ifb />
  </div>

  <!-- F2 - Looping over blocks -->
  <div class="glass-card">
    <h3>F2 - Looping over blocks</h3>
    <div class="stack">
      <Lo1 />
      <Lo2 />
    </div>
  </div>

  <!-- F3 - Looping over blocks without as , for grid -->
  <div class="glass-card">
    <h3>F3 - Looping without <code>as</code> for grid</h3>
  </div>

  <!-- ////// END MAN TAG ////// -->
  <!-- ////// END MAN TAG ////// -->
  <!-- ////// END MAN TAG ////// -->
</main>
