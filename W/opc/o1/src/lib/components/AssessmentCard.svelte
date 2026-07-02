<script lang="ts">
import Card from './Card.svelte';
import Button from './Button.svelte';

interface Props {
  icon: string;
  iconColor: 'pink' | 'cyan';
  title: string;
  highlight: string;
  description: string;
  href: string;
  delay?: string;
}

let { icon, iconColor, title, highlight, description, href, delay = '0s' }: Props = $props();

const border = $derived(iconColor === 'pink' ? 'border-neon-pink/40' : 'border-neon-cyan/40');
const bg = $derived(iconColor === 'pink' ? 'bg-neon-pink/5' : 'bg-neon-cyan/5');
const text = $derived(iconColor === 'pink' ? 'text-neon-pink' : 'text-neon-cyan');
const highlightClass = $derived(iconColor === 'pink' ? 'neon-text-pink' : 'neon-text-cyan');
const pulseBorder = $derived(iconColor === 'pink' ? 'border-neon-pink/20' : 'border-neon-cyan/20');
const variant = $derived(iconColor === 'pink' ? 'primary' as const : 'secondary' as const);
</script>

<div class="animate-slide-up" style="animation-delay: {delay};">
  <Card glow>
    <div class="text-center space-y-6 py-6">
      <div class="w-20 h-20 mx-auto rounded-xl border {border} {bg} flex items-center justify-center animate-float relative">
        <span class="text-3xl font-display font-black {text} tracking-tight">{icon}</span>
        <div class="absolute inset-0 rounded-xl border {pulseBorder} animate-pulse"></div>
      </div>
      <div>
        <h2 class="font-display text-xl font-bold text-white tracking-wider uppercase mb-2">
          {title} <span class={highlightClass}>{highlight}</span>
        </h2>
        <p class="text-gray-400 font-body text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div class="flex items-center justify-center gap-4 text-[10px] font-display tracking-widest text-gray-600 uppercase">
        <span>25 Questions</span>
        <span class="w-1 h-1 rounded-full bg-neon-purple/40"></span>
        <span>3 Difficulty Tiers</span>
      </div>
      <Button {variant} size="lg" onclick={() => window.location.href = href}>
        Launch Mission
      </Button>
    </div>
  </Card>
</div>
