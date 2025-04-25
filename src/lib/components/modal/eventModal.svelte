<script>
	import { Modal } from 'flowbite-svelte';
    let {showEventCode} = $props()
</script>

<Modal bind:open={showEventCode} autoclose>
	<div>
		<p>MyComponent.svelte</p>
		<pre class="border p-4">
{`<script>
import { createEventDispatcher } from 'svelte';
import { Button } from 'flowbite-svelte';
const dispatch = createEventDispatcher();

function handleClick() {
	// 发送自定义事件
	dispatch('customEvent', { message: 'Hello from MyEvents!' });
}
</script>`}

{`<Button color="purple" on:click={handleClick}>Send Custom Event</Button>`}
</pre>
	</div>
	<div>
		<p>usePage.svelte</p>
		<pre class="border p-4">
{`<script>
import MyEvents from '$lib/components/svelte/MyEvents.svelte';
let eventContent = '';
</script>`}

{`<MyEvents on:customEvent={(event) => (eventContent = event.detail.message)} />`}
</pre>
	</div>
</Modal>
