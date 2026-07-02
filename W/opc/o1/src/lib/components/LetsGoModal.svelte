<script lang="ts">
import { onMount, onDestroy } from 'svelte';

interface Props {
  intervalMs?: number;
  durationMs?: number;
  initialDelayMs?: number;
}

let { intervalMs = 30000, durationMs = 3000, initialDelayMs = 15000 }: Props = $props();

let visible = $state(false);
let exiting = $state(false);
let timeLeft = $state(0);
let intervalId: ReturnType<typeof setInterval>;
let initialTimeoutId: ReturnType<typeof setTimeout>;
let exitTimeoutId: ReturnType<typeof setTimeout>;
let countdownId: ReturnType<typeof setInterval>;

const GIF_URL = 'https://res.cloudinary.com/dsec3pqkf/image/upload/v1781369198/5.gif';
const RING_RADIUS = 28;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const progress = $derived(timeLeft / durationMs);
const dashOffset = $derived(RING_CIRCUMFERENCE * (1 - progress));

function showModal() {
  if (visible) return;
  exiting = false;
  visible = true;
  timeLeft = durationMs;

  countdownId = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 50);
  }, 50);

  exitTimeoutId = setTimeout(() => {
    exiting = true;
    setTimeout(() => {
      visible = false;
      exiting = false;
      clearInterval(countdownId);
    }, 350);
  }, durationMs);
}

onMount(() => {
  initialTimeoutId = setTimeout(() => {
    showModal();
    intervalId = setInterval(showModal, intervalMs);
  }, initialDelayMs);
});

onDestroy(() => {
  clearTimeout(initialTimeoutId);
  clearInterval(intervalId);
  clearTimeout(exitTimeoutId);
  clearInterval(countdownId);
});
</script>

{#if visible}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    class:animate-backdrop-in={!exiting}
    class:animate-backdrop-out={exiting}
  >
    <!-- Backdrop overlay -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <!-- Modal card -->
    <div
      class="relative z-10 w-full max-w-md"
      class:animate-modal-enter={!exiting}
      class:animate-modal-exit={exiting}
    >
      <!-- Outer glow ring -->
      <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-neon-cyan/30 via-neon-purple/20 to-neon-pink/30 blur-2xl opacity-70 animate-modal-glow pointer-events-none"></div>

      <!-- Animated gradient border -->
      <div class="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-neon-cyan/60 via-neon-purple/40 to-neon-pink/60 opacity-80 pointer-events-none animate-[modal-border-spin_3s_ease-in-out_infinite] bg-[length:200%_200%]">
        <div class="w-full h-full rounded-2xl bg-surface-900/95"></div>
      </div>

      <!-- Main card body -->
      <div class="relative glass-panel rounded-2xl overflow-hidden">
        <!-- Scan line overlay -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.04] to-transparent h-[200%] -translate-y-full animate-[scan-line_3s_linear_infinite]"></div>
        </div>

        <!-- HUD corners -->
        <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/60 pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/60 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-cyan/60 pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/60 pointer-events-none"></div>

        <!-- Content -->
        <div class="relative z-10 p-6 flex flex-col items-center gap-5">
          <!-- GIF container with glow -->
          <div class="relative">
            <div class="absolute -inset-2 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-lg opacity-60 pointer-events-none"></div>
            <img
              src={GIF_URL}
              alt="Lets Go"
              class="relative w-full max-w-[280px] h-auto rounded-lg border border-neon-cyan/20"
            />
          </div>

          <!-- "lets Go" message -->
          <div class="text-center space-y-2">
            <h2 class="font-display text-3xl sm:text-4xl font-black tracking-wider neon-text-cyan animate-pulse-glow px-4 py-1 rounded-lg">
              lets Go
            </h2>
            <div class="h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent"></div>
          </div>

          <!-- Countdown ring -->
          <div class="relative flex items-center justify-center">
            <!-- Glow behind ring -->
            <div class="absolute inset-0 rounded-full bg-neon-cyan/10 blur-xl pointer-events-none"></div>

            <svg width="72" height="72" viewBox="0 0 72 72" class="transform -rotate-90">
              <!-- Track -->
              <circle
                cx="36"
                cy="36"
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(168, 85, 247, 0.15)"
                stroke-width="4"
              />
              <!-- Progress -->
              <circle
                cx="36"
                cy="36"
                r={RING_RADIUS}
                fill="none"
                stroke="url(#countdown-gradient)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray={RING_CIRCUMFERENCE}
                stroke-dashoffset={dashOffset}
                class="transition-[stroke-dashoffset] duration-100 ease-linear"
              />
              <defs>
                <linearGradient id="countdown-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#06f5d0" />
                  <stop offset="100%" stop-color="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            <!-- Time left number -->
            <span class="absolute font-display text-sm font-bold text-neon-cyan tracking-wider">
              {Math.ceil(timeLeft / 1000)}s
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
