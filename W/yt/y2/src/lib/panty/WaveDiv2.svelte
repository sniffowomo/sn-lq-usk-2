<script lang="ts">
  type Props = {
    speed?: number
    glow?: number
    opacity?: number
    thickness?: number
    breatheSpeed?: number
    hueSpeed?: number
  }

  let {
    speed = 4,
    glow = 6,
    opacity = 0.9,
    thickness = 3.5,
    breatheSpeed = 3.5,
    hueSpeed = 4.5,
  }: Props = $props()
</script>

<div
  class="wave-divider"
  style="
    --speed: {speed}s;
    --breathe: {breatheSpeed}s;
    --hue: {hueSpeed}s;
    --thick: {thickness};
    --glow-blur: {glow}px;
    --base-opacity: {opacity};
  "
>
  <!-- Layer 1: Scroll (GPU translated) -->
  <div class="scroll-layer">
    <!-- Layer 2: Breathe (GPU scaled/faded) -->
    <div class="breathe-layer">
      <svg viewBox="0 0 200 28" preserveAspectRatio="none">
        <path d="M0 14 Q25 9, 50 14 T100 14 T150 14 T200 14" class="core" />
        <path d="M0 14 Q25 9, 50 14 T100 14 T150 14 T200 14" class="glow" />
      </svg>
    </div>
  </div>
</div>

<style>
  .wave-divider {
    width: 100%;
    height: 32px;
    opacity: var(--base-opacity);
    overflow: hidden;
    position: relative;
  }

  /* SCROLL LAYER: Only handles horizontal translation */
  .scroll-layer {
    width: 200%;
    height: 100%;
    animation: scroll var(--speed) linear infinite;
    will-change: transform;
  }

  /* BREATHE LAYER: Only handles opacity + vertical scale */
  .breathe-layer {
    width: 100%;
    height: 100%;
    transform-origin: center;
    will-change: opacity, transform;
    animation: breathe var(--breathe) cubic-bezier(0.36, 0, 0.64, 1) infinite;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }

  .core {
    fill: none;
    stroke-width: var(--thick);
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: hue var(--hue) ease-in-out infinite;
  }

  .glow {
    fill: none;
    /* Static thickness + blur. Never animated. */
    stroke-width: calc(var(--thick) * 2);
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: blur(calc(var(--glow-blur) * 0.7));
    opacity: 0.35;
    animation: hue var(--hue) ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }

  /* ONLY animates GPU-composited properties */
  @keyframes breathe {
    0%,
    100% {
      opacity: 0.25;
      transform: scaleY(0.92);
    }
    50% {
      opacity: 0.8;
      transform: scaleY(1.12);
    }
  }

  @keyframes hue {
    0%,
    100% {
      stroke: hsl(145, 70%, 55%);
    }
    50% {
      stroke: hsl(155, 80%, 65%);
    }
  }
</style>
