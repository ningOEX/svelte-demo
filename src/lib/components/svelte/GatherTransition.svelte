<!-- svelte内置动画 + 过渡效果 show -->
<script>
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import {
		backIn,
		backInOut,
		backOut,
		bounceIn,
		bounceInOut,
		bounceOut,
		circIn,
		circInOut,
		circOut,
		cubicIn,
		cubicInOut,
		cubicOut,
		elasticIn,
		elasticInOut,
		elasticOut,
		expoIn,
		expoInOut,
		expoOut,
		linear,
		quadIn,
		quadInOut,
		quadOut,
		quartIn,
		quartInOut,
		quartOut,
		quintIn,
		quintInOut,
		quintOut,
		sineIn,
		sineInOut,
		sineOut
	} from 'svelte/easing';
	import { Card, Button, Modal } from 'flowbite-svelte';
	import { Hr } from 'flowbite-svelte';

	const transitionType = ['blur', 'fade', 'fly', 'scale', 'slide'];
	const _transition = [blur, fade, fly, scale, slide];
	const easingType = [
		'backIn',
		'backInOut',
		'backOut',
		'bounceIn',
		'bounceInOut',
		'bounceOut',
		'circIn',
		'circInOut',
		'circOut',
		'cubicIn',
		'cubicInOut',
		'cubicOut',
		'elasticIn',
		'elasticInOut',
		'elasticOut',
		'expoIn',
		'expoInOut',
		'expoOut',
		'linear',
		'quadIn',
		'quadInOut',
		'quadOut',
		'quartIn',
		'quartInOut',
		'quartOut',
		'quintIn',
		'quintInOut',
		'quintOut',
		'sineIn',
		'sineInOut',
		'sineOut'
	];
	const _easing = [
		backIn,
		backInOut,
		backOut,
		bounceIn,
		bounceInOut,
		bounceOut,
		circIn,
		circInOut,
		circOut,
		cubicIn,
		cubicInOut,
		cubicOut,
		elasticIn,
		elasticInOut,
		elasticOut,
		expoIn,
		expoInOut,
		expoOut,
		linear,
		quadIn,
		quadInOut,
		quadOut,
		quartIn,
		quartInOut,
		quartOut,
		quintIn,
		quintInOut,
		quintOut,
		sineIn,
		sineInOut,
		sineOut
	];
	const btnColor = [
		'dark',
		'light',
		'blue',
		'green',
		'red',
		'yellow',
		'purple',
		'alternative',
		'light',
		'blue',
		'green',
		'dark',
		'light',
		'blue',
		'green',
		'red',
		'yellow',
		'purple',
		'alternative',
		'light',
		'red',
		'yellow',
		'purple',
		'purple',
		'dark',
		'light',
		'blue',
		'green',
		'red',
		'yellow',
		'purple',
		'alternative',
		'light',
		'blue',
		'green',
		'red',
		'yellow',
		'purple',
		'purple'
	];

    // 展示按钮
	let showTransition = false;
    let showEasing = false; 

    // 查看代码
	let showCodeTransitionModal = false;
	let showCodeEasingModal = false;


	// transition
	let TransitionType = null; // 函数
	let transitionTitle = ''; // 显示标题

	// easing
	let EasingType = null; // 函数
	let easingTitle = null; //显示标题

	const transitionClick = (type, index)=> {
		transitionTitle = type;
		TransitionType = _transition[index];
		showTransition = !showTransition;
	};
    const easingClick = (type,index)=>{
        easingTitle = type
        EasingType = _easing[index]
        showEasing = !showEasing;
    }

</script>

<!-- 按钮区 -->
<div class="flex w-full flex-wrap items-center gap-2">
	<p>transition:</p>
	{#each transitionType as type, index}
		<Button color={btnColor[index]} class=" cursor-pointer" on:click={transitionClick(type, index)}
			>{type}</Button
		>
	{/each}
</div>

{#if transitionTitle}
<Hr classHr="my-2" />
<p>easing:</p>
<div class="easing-content relative flex w-full gap-2 overflow-x-scroll">
	{#each easingType as type, index}
		<Button color={btnColor[index]} class="cursor-pointer" on:click={easingClick(type, index)}>{type}</Button>
	{/each}
</div>
{/if}

<Hr classHr="my-2" />

<!-- 展示区 -->
<div class="flex flex-wrap gap-10 min-h-72">
	<div class="flex flex-col gap-2">
		<p>transition当前过渡:{transitionTitle}</p>
		{#if transitionTitle}
        <Button class="w-[200px]" color="red" on:click={() => (showCodeTransitionModal = true)}>查看代码</Button>
		{/if}
		{#if showTransition}
			<div class="box bg-red-500/30" transition:TransitionType>transition</div>
		{/if}
	</div>
	<div class="flex flex-col gap-2">
        {#if transitionTitle}
        <p> transition过渡：{transitionTitle} easing缓冲:{easingTitle}</p>
		{#if easingTitle}
        <Button class="w-[200px]" color="red" on:click={() => (showCodeEasingModal = true)}>查看代码</Button>
		{/if}
		{#if showEasing}
			<div class="box bg-blue-900/30" transition:TransitionType={{duration:400,easing:EasingType}}>easing</div>
		{/if}
        {/if}
	</div>
</div>


<!-- 查看代码 -->
<Modal bind:open={showCodeTransitionModal} autoclose>
    <div class="my-4 flex flex-col">
        <p>JavaScript</p>
<pre class="border">
{
`import { ${transitionTitle} } from 'svelte/transition';`}
</pre>
        <p>HTML</p>
<pre class="border">
{`{#if show}
    <div class="box" transition:${transitionTitle}>transition</div>
{/if}`}
</pre>
    </div>
</Modal>

<Modal bind:open={showCodeEasingModal} autoclose>
    <div class="my-4 flex flex-col">
        <p>JavaScript</p>
<pre class="border">
{
`import { ${transitionTitle} } from 'svelte/transition';
import {${easingTitle}} from 'svelte/easing';`}
</pre>
        <p>HTML</p>
<pre class="border">
{`{#if show}
    <div class="box" transition:${transitionTitle}={{duration:400,easing:${easingTitle}}}>easing</div>
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
