<script>
	import SvelteTransition from '$lib/components/svelte/GatherTransition.svelte';
	import MyEvents from '$lib/components/svelte/MyEvents.svelte';
	import EventModal from '$lib/components/modal/eventModal.svelte';
	import MyMotion from '$lib/components/svelte/MyMotion.svelte';
	import Test from '$lib/components/test.svelte';
	import { Hr, Card, Button, Modal } from 'flowbite-svelte';

	let eventContent = '';
	let showEventCode = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>svelte/transition</h1>
<SvelteTransition />

<Hr />

<!-- svelte/events -->
<div class="justify-center gap-10 md:grid xl:flex">
	<MyEvents on:customEvent={(event) => (eventContent = event.detail.message)} />
	<p class=" hidden xl:block">>>>>></p>
	<p class="block text-center xl:hidden">↓↓↓↓↓↓</p>
	<Card class="flex flex-col gap-2">
		此处接受组件抛出的自定义事件/数据
		<p class="bg-amber-200 p-4">{eventContent}</p>
		{#if eventContent}
			<Button color="purple" on:click={() => (showEventCode = !showEventCode)}>查看代码</Button>
		{/if}
	</Card>
</div>

<Hr />

<MyMotion />

<!-- 弹出框区域 -->
<EventModal {showEventCode} />

<Test />
