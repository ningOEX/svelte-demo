<script>
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import {
		backIn, backInOut, backOut,
		bounceIn, bounceInOut, bounceOut,
		circIn, circInOut, circOut,
		cubicIn, cubicInOut, cubicOut,
		elasticIn, elasticInOut, elasticOut,
		expoIn, expoInOut, expoOut,
		linear, quadIn, quadInOut, quadOut,
		quartIn, quartInOut, quartOut,
		quintIn, quintInOut, quintOut,
		sineIn, sineInOut, sineOut
	} from 'svelte/easing';
	import { Card, Button, Modal } from 'flowbite-svelte';
	import { Hr } from 'flowbite-svelte';

	const transitions = [
		{ name: 'blur', func: blur },
		{ name: 'fade', func: fade },
		{ name: 'fly', func: fly },
		{ name: 'scale', func: scale },
		{ name: 'slide', func: slide }
	];

	const easings = [
		{ name: 'backIn', func: backIn },
		{ name: 'backInOut', func: backInOut },
		{ name: 'backOut', func: backOut },
		{ name: 'bounceIn', func: bounceIn },
		{ name: 'bounceInOut', func: bounceInOut },
		{ name: 'bounceOut', func: bounceOut },
		{ name: 'circIn', func: circIn },
		{ name: 'circInOut', func: circInOut },
		{ name: 'circOut', func: circOut },
		{ name: 'cubicIn', func: cubicIn },
		{ name: 'cubicInOut', func: cubicInOut },
		{ name: 'cubicOut', func: cubicOut },
		{ name: 'elasticIn', func: elasticIn },
		{ name: 'elasticInOut', func: elasticInOut },
		{ name: 'elasticOut', func: elasticOut },
		{ name: 'expoInOut', func: expoInOut },
		{ name: 'expoOut', func: expoOut },
		{ name: 'linear', func: linear },
		{ name: 'quadIn', func: quadIn },
		{ name: 'quadInOut', func: quadInOut },
		{ name: 'quadOut', func: quadOut },
		{ name: 'quartIn', func: quartIn },
		{ name: 'quartInOut', func: quartInOut },
		{ name: 'quartOut', func: quartOut },
		{ name: 'quintIn', func: quintIn },
		{ name: 'quintInOut', func: quintInOut },
		{ name: 'quintOut', func: quintOut },
		{ name: 'sineIn', func: sineIn },
		{ name: 'sineInOut', func: sineInOut },
		{ name: 'sineOut', func: sineOut }
	];

	const btnColors = ['dark', 'light', 'blue', 'green', 'red', 'yellow', 'purple', 'alternative'];

	let showCodeEasingModal = $state(false)
	let showCodeTransitionModal = $state(false)

	let isTransitionVisible = $state(false);
	let isEasingVisible = $state(false); 
	let transitionData = $state({ title: '', func: null });
	let easingData = $state({ title: '', func: null });

	const toggleTransition = (type, index) => {
		transitionData = { title: type, func: transitions[index].func };
		isTransitionVisible = !isTransitionVisible;
	};

	const toggleEasing = (type, index) => {
		easingData = { title: type, func: easings[index].func };
		isEasingVisible = !isEasingVisible;
	};
</script>

<!-- 按钮区 -->
<div class="flex w-full flex-wrap items-center gap-2">
	<p>Transition:</p>
	{#each transitions as { name }, index}
		<Button color={btnColors[index % btnColors.length]} on:click={() => toggleTransition(name, index)}>{name}</Button>
	{/each}
</div>

{#if transitionData.title}
<Hr classHr="my-2" />
<p>Easing:</p>
<div class="easing-content relative flex w-full gap-2 overflow-x-scroll">
	{#each easings as { name }, index}
		<Button color={btnColors[index % btnColors.length]} on:click={() => toggleEasing(name, index)}>{name}</Button>
	{/each}
</div>
{/if}

<Hr classHr="my-2" />

<!-- 展示区 -->
<div class="flex flex-wrap gap-10 min-h-72">
	<div class="flex flex-col gap-2">
		<p>Current Transition: {transitionData.title}</p>
		{#if transitionData.title}
			<Button color="red" class="w-[200px]" on:click={() => (showCodeTransitionModal = true)}>View Code</Button>
		{/if}
		{#if isTransitionVisible}
			<div class="box bg-amber-800/40" transition:transitionData.func>Transition</div>
		{/if}
	</div>
	<div class="flex flex-col gap-2">
		{#if transitionData.title}
			<p>Transition: {transitionData.title}, Easing: {easingData.title}</p>
			{#if easingData.title}
				<Button color="red" class="w-[200px]" on:click={() => (showCodeEasingModal = true)}>View Code</Button>
			{/if}
			{#if isEasingVisible}
				<div class="box bg-amber-300/50" transition:transitionData.func={{duration: 400, easing: easingData.func}}>Easing</div>
			{/if}
		{/if}
	</div>
</div>

<!-- 查看代码 -->
<Modal bind:open={showCodeTransitionModal} autoclose>
    <div class="my-4 flex flex-col">
        <p>JavaScript</p>
<pre class="border">
{`import { ${transitionData.title} } from 'svelte/transition';`}
</pre>
        <p>HTML</p>
<pre class="border">
{`{#if show}
    <div class="box" transition:${transitionData.title}>Transition</div>
{/if}`}
</pre>
    </div>
</Modal>

<Modal bind:open={showCodeEasingModal} autoclose>
    <div class="my-4 flex flex-col">
        <p>JavaScript</p>
<pre class="border">
{`import { ${transitionData.title} } from 'svelte/transition';
import { ${easingData.title} } from 'svelte/easing';`}
</pre>
        <p>HTML</p>
<pre class="border">
{`{#if show}
    <div class="box" transition:${transitionData.title}={{duration: 400, easing: ${easingData.title}}}>Easing</div>
{/if}`}
</pre>
    </div>
</Modal>

<style>
	.box {
		width: 200px;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		color: white;
	}
</style>