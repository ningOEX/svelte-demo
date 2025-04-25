<script>
	import Header from './Header.svelte';
	import { A } from 'flowbite-svelte';
	import '../app.css';

	let { children } = $props();

	import { page } from '$app/state';
	
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	
	<footer>
		<p>
			由 <A class="font-medium hover:underline" href="https://vercel.com/" target="_blank">Vercel</A>  提供快速的部署服务 Copyright © 2025-04 <A class="font-medium hover:underline" href="https://github.com/ningOEX" target="_blank">ningOEX</A>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
