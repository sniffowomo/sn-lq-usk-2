<script lang="ts">
import { onMount } from 'svelte';

let ip = $state('---');
let utcString = $state('');
let mounted = $state(false);

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

function padMs(n: number): string {
  return n.toString().padStart(3, '0');
}

function formatUTC(d: Date): string {
  const Y = d.getUTCFullYear();
  const M = pad(d.getUTCMonth() + 1);
  const D = pad(d.getUTCDate());
  const h = pad(d.getUTCHours());
  const m = pad(d.getUTCMinutes());
  const s = pad(d.getUTCSeconds());
  const ms = padMs(d.getUTCMilliseconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s}.${ms}`;
}

let raf: number;

function tick() {
  utcString = formatUTC(new Date());
  raf = requestAnimationFrame(tick);
}

onMount(() => {
  mounted = true;
  utcString = formatUTC(new Date());
  raf = requestAnimationFrame(tick);

  fetch('https://api.ipify.org?format=json')
    .then((r) => r.json())
    .then((d) => { ip = d.ip; })
    .catch(() => { ip = 'unavailable'; });

  return () => cancelAnimationFrame(raf);
});
</script>

{#if mounted}
<footer class="mt-auto border-t border-surface-700/30">
  <div class="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
    <!-- IP -->
    <div class="flex items-center gap-2">
      <span class="font-display text-[9px] sm:text-[10px] tracking-[0.3em] text-gray-600 uppercase">IP</span>
      <span class="font-display text-xs sm:text-sm text-neon-cyan/80 tracking-wider">{ip}</span>
    </div>

    <!-- UTC time with glow -->
    <div class="flex items-center gap-2">
      <span class="font-display text-[9px] sm:text-[10px] tracking-[0.3em] text-gray-600 uppercase">UTC</span>
      <span class="font-mono text-xs sm:text-sm text-neon-purple tracking-wider time-glow">{utcString}</span>
    </div>
  </div>
</footer>
{/if}

<style>
  .time-glow {
    text-shadow:
      0 0 4px rgba(168, 85, 247, 0.4),
      0 0 10px rgba(168, 85, 247, 0.2),
      0 0 20px rgba(168, 85, 247, 0.1);
    animation: time-pulse 2s ease-in-out infinite;
  }

  @keyframes time-pulse {
    0%, 100% {
      text-shadow:
        0 0 4px rgba(168, 85, 247, 0.4),
        0 0 10px rgba(168, 85, 247, 0.2),
        0 0 20px rgba(168, 85, 247, 0.1);
    }
    50% {
      text-shadow:
        0 0 6px rgba(168, 85, 247, 0.6),
        0 0 16px rgba(168, 85, 247, 0.35),
        0 0 30px rgba(168, 85, 247, 0.15),
        0 0 45px rgba(168, 85, 247, 0.05);
    }
  }
</style>
