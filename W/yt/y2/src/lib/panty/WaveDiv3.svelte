<script lang="ts">
  type Props = {
    thickness?: number
    bumpThickness?: number
    bumpWidth?: number
    glow?: number
    speed?: number
    breatheSpeed?: number
  }

  let {
    thickness = 2,
    bumpThickness = 8,
    bumpWidth = 180,
    glow = 18,
    speed = 7,
    breatheSpeed = 3,
  }: Props = $props()
</script>

<div
  class="alive-line"
  style="
    --thickness:{thickness}px;
    --bump-thickness:{bumpThickness}px;
    --bump-width:{bumpWidth}px;
    --glow:{glow}px;
    --speed:{speed}s;
    --breathe:{breatheSpeed}s;
  "
>
  <div class="track"></div>

  <div class="pulse">
    <div class="pulse-glow"></div>
    <div class="pulse-core"></div>
  </div>
</div>

<style>
  .alive-line {
    position: relative;
    width: 100%;
    height: calc(var(--bump-thickness) * 4);
    overflow: hidden;
    isolation: isolate;
  }

  .track {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;

    height: var(--thickness);

    translate: 0 -50%;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      rgb(255 255 255 / 0.04),
      rgb(255 255 255 / 0.12),
      rgb(255 255 255 / 0.04)
    );
  }

  .pulse {
    position: absolute;

    left: calc(var(--bump-width) * -1);

    top: 50%;

    width: var(--bump-width);
    height: calc(var(--bump-thickness) * 4);

    translate: 0 -50%;

    animation: travel var(--speed) linear infinite;

    will-change: transform;
  }

  .pulse-core {
    position: absolute;

    left: 0;
    right: 0;
    top: 50%;

    height: var(--bump-thickness);

    translate: 0 -50%;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      transparent,
      #ff80d5 15%,
      #ff2d95 40%,
      #ff004c 60%,
      #ff2d95 85%,
      transparent
    );

    animation: breatheCore var(--breathe) ease-in-out infinite;
  }

  .pulse-glow {
    position: absolute;
    inset: 0;

    background: radial-gradient(
      ellipse at center,
      rgb(255 45 149 / 0.85),
      rgb(255 0 76 / 0.55) 45%,
      transparent 75%
    );

    filter: blur(var(--glow));

    animation: breatheGlow var(--breathe) ease-in-out infinite;
  }

  @keyframes travel {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(calc(100vw + var(--bump-width) * 2));
    }
  }

  @keyframes breatheCore {
    0%,
    100% {
      height: calc(var(--bump-thickness) * 0.75);
    }

    50% {
      height: calc(var(--bump-thickness) * 1.4);
    }
  }

  @keyframes breatheGlow {
    0%,
    100% {
      opacity: 0.5;
      scale: 0.85;
    }

    50% {
      opacity: 1;
      scale: 1.25;
    }
  }
</style>
