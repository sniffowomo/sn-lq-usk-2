<script>
	import './layout.css';
	import { onMount } from 'svelte';
	import LetsGoModal from '$lib/components/LetsGoModal.svelte';

	let { children } = $props();

	onMount(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		}
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#05050f" />
</svelte:head>

{@render children()}

<LetsGoModal />
