<script lang="ts">
import Card from '$lib/components/Card.svelte';
import Button from '$lib/components/Button.svelte';
</script>

<div class="min-h-screen bg-bg text-white p-4 md:p-8">
  <div class="max-w-6xl mx-auto">
    <header class="text-center mb-16 pt-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Knowledge Assessment Platform
      </h1>
      <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Choose your assessment to test and master your skills
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <div class="text-center space-y-6 py-4">
          <div class="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/50 flex items-center justify-center mx-auto">
            <span class="text-2xl">⚡</span>
          </div>
          <h2 class="text-2xl font-bold text-white">Svelte 5 Knowledge</h2>
          <p class="text-gray-400 leading-relaxed">
            Test your expertise in Svelte 5 runes, components, reactivity, and advanced patterns.
          </p>
          <Button variant="primary" size="lg" onclick={() => window.location.href = '/svelte'}>
            Start Assessment
          </Button>
        </div>
      </Card>

      <Card>
        <div class="text-center space-y-6 py-4">
          <div class="w-16 h-16 rounded-full bg-pink-900/30 border border-pink-500/50 flex items-center justify-center mx-auto">
            <span class="text-2xl">🎯</span>
          </div>
          <h2 class="text-2xl font-bold text-white">Usability &amp; UX</h2>
          <p class="text-gray-400 leading-relaxed">
            Evaluate your understanding of UX principles, accessibility, heuristics, and interaction design.
          </p>
          <Button variant="secondary" size="lg" onclick={() => window.location.href = '/usability'}>
            Start Assessment
          </Button>
        </div>
      </Card>
    </div>
  </div>
</div>
