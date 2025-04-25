<script>
	import { createEventDispatcher } from 'svelte';
	import { Card,Button } from 'flowbite-svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		// 发送自定义事件
		dispatch('customEvent', { message: 'Hello from MyEvents!' });
	}
</script>

<Card>
    <h1>svelte/events</h1>
    <Button color="purple" on:click={handleClick}>Send Custom Event</Button>
</Card>
