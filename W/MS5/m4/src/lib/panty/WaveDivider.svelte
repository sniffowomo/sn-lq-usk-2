<script lang="ts">
  type Props = {
    color?: string
    speed?: number
    glow?: number
    opacity?: number
  }

  let {
    color = 'currentColor',
    speed = 4,
    glow = 4,
    opacity = 0.8,
  }: Props = $props()
</script>

<div
  class="wave-divider"
  style="
		--wave-color: {color};
		--wave-speed: {speed}s;
		--wave-glow: {glow}px;
		--wave-opacity: {opacity};
	"
>
  <svg viewBox="0 0 200 20" preserveAspectRatio="none">
    <path
      d="M0 10
			   Q25 9, 50 10
			   T100 10
			   T150 10
			   T200 10"
    />
  </svg>
</div>

<!-- Usage : 
<WaveDivider />

<WaveDivider
	color="#00e5ff"
	speed={6}
	glow={8}
/> -->

<style>
  .wave-divider {
    width: 100%;
    height: 8px;
    overflow: hidden;
    color: var(--wave-color);
    opacity: var(--wave-opacity);
  }

  svg {
    width: 200%;
    height: 100%;
    display: block;
    animation: wave-scroll var(--wave-speed) linear infinite;
  }

  path {
    fill: none;
    stroke: currentColor;
    stroke-width: 1;
    stroke-linecap: round;
    filter: drop-shadow(0 0 var(--wave-glow) currentColor);
    animation: pulse 2.5s ease-in-out infinite;
  }

  @keyframes wave-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.35;
    }
    50% {
      opacity: 1;
    }
  }
</style>
