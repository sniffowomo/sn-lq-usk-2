<script lang="ts">
import AmbientBackground from '$lib/components/AmbientBackground.svelte';
import Hero from '$lib/components/Hero.svelte';
import AssessmentCard from '$lib/components/AssessmentCard.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>NEXUS // Knowledge Assessment Platform</title>
</svelte:head>

<div class="min-h-screen bg-bg text-white relative overflow-hidden grid-bg flex flex-col">
  <AmbientBackground />

  <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12">
    <Hero />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <AssessmentCard
        icon="S5"
        iconColor="pink"
        title="Svelte 5"
        highlight="Knowledge"
        description="Runes, components, reactivity, lifecycle, SSR, SvelteKit."
        href="/svelte"
        delay="0.15s"
      />
      <AssessmentCard
        icon="UX"
        iconColor="cyan"
        title="Usability"
        highlight="& UX"
        description="Heuristics, accessibility, cognitive load, interaction design."
        href="/usability"
        delay="0.3s"
      />
    </div>

    <div class="mt-20 animate-slide-up" style="animation-delay: 0.45s;">
      <Footer />
    </div>
  </div>
</div>
