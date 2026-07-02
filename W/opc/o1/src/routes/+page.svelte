<script lang="ts">
import Card from '$lib/components/Card.svelte';
import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
  <title>NEXUS // Knowledge Assessment Platform</title>
</svelte:head>

<div class="min-h-screen bg-bg text-white relative overflow-hidden grid-bg">
  <!-- Ambient background effects -->
  <div class="fixed inset-0 pointer-events-none">
    <!-- Top-left radial glow -->
    <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]"></div>
    <!-- Bottom-right radial glow -->
    <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]"></div>
    <!-- Scan line -->
    <div class="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent top-0 animate-[scan-line_8s_linear_infinite]"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12">
    <!-- Hero -->
    <header class="text-center mb-20 pt-8 animate-slide-up">
      <!-- Top accent -->
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan/50"></div>
        <span class="font-display text-[10px] tracking-[0.5em] text-neon-cyan/60 uppercase">System Online</span>
        <div class="h-px w-12 bg-gradient-to-l from-transparent to-neon-cyan/50"></div>
      </div>

      <h1 class="font-display text-5xl md:text-7xl font-black tracking-wider uppercase mb-4">
        <span class="neon-text-purple">NEX</span><span class="neon-text-cyan">US</span>
      </h1>
      <p class="font-display text-sm md:text-base tracking-[0.4em] text-gray-500 uppercase mb-6">
        Knowledge Assessment Platform
      </p>
      <p class="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-body">
        Choose your mission. Test your expertise. Level up your skills.
      </p>

      <!-- Decorative line -->
      <div class="mt-10 flex items-center justify-center gap-2">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-neon-purple/40"></div>
        <div class="w-2 h-2 rotate-45 border border-neon-purple/40"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-neon-purple/40"></div>
      </div>
    </header>

    <!-- Assessment cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- Svelte Card -->
      <div class="animate-slide-up" style="animation-delay: 0.15s;">
        <Card glow>
          <div class="text-center space-y-6 py-6">
            <div class="w-20 h-20 mx-auto rounded-xl border border-neon-pink/40 bg-neon-pink/5 flex items-center justify-center animate-float relative">
              <span class="text-3xl font-display font-black text-neon-pink tracking-tight">S5</span>
              <div class="absolute inset-0 rounded-xl border border-neon-pink/20 animate-pulse"></div>
            </div>
            <div>
              <h2 class="font-display text-xl font-bold text-white tracking-wider uppercase mb-2">
                Svelte 5 <span class="neon-text-pink">Knowledge</span>
              </h2>
              <p class="text-gray-400 font-body text-sm leading-relaxed">
                Runes, components, reactivity, lifecycle, SSR, SvelteKit.
              </p>
            </div>
            <div class="flex items-center justify-center gap-4 text-[10px] font-display tracking-widest text-gray-600 uppercase">
              <span>25 Questions</span>
              <span class="w-1 h-1 rounded-full bg-neon-purple/40"></span>
              <span>3 Difficulty Tiers</span>
            </div>
            <Button variant="primary" size="lg" onclick={() => window.location.href = '/svelte'}>
              Launch Mission
            </Button>
          </div>
        </Card>
      </div>

      <!-- Usability Card -->
      <div class="animate-slide-up" style="animation-delay: 0.3s;">
        <Card glow>
          <div class="text-center space-y-6 py-6">
            <div class="w-20 h-20 mx-auto rounded-xl border border-neon-cyan/40 bg-neon-cyan/5 flex items-center justify-center animate-float relative" style="animation-delay: 0.5s;">
              <span class="text-3xl font-display font-black text-neon-cyan tracking-tight">UX</span>
              <div class="absolute inset-0 rounded-xl border border-neon-cyan/20 animate-pulse"></div>
            </div>
            <div>
              <h2 class="font-display text-xl font-bold text-white tracking-wider uppercase mb-2">
                Usability <span class="neon-text-cyan">&amp; UX</span>
              </h2>
              <p class="text-gray-400 font-body text-sm leading-relaxed">
                Heuristics, accessibility, cognitive load, interaction design.
              </p>
            </div>
            <div class="flex items-center justify-center gap-4 text-[10px] font-display tracking-widest text-gray-600 uppercase">
              <span>25 Questions</span>
              <span class="w-1 h-1 rounded-full bg-neon-purple/40"></span>
              <span>3 Difficulty Tiers</span>
            </div>
            <Button variant="secondary" size="lg" onclick={() => window.location.href = '/usability'}>
              Launch Mission
            </Button>
          </div>
        </Card>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-20 text-center animate-slide-up" style="animation-delay: 0.45s;">
      <div class="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-surface-700 to-transparent mb-6"></div>
      <p class="font-display text-[10px] tracking-[0.4em] text-gray-600 uppercase">
        NEXUS v1.0 &middot; Assessment Engine
      </p>
    </footer>
  </div>
</div>
