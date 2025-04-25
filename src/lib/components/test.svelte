<script>
    import { fade, fly } from 'svelte/transition';
  
    let visible = $state(false);
  </script>
  
  <label>
    <input type="checkbox" bind:checked={visible}>
    可见
  </label>
  
  {#if visible}
      <div in:fly={{ y: 200 }} out:fade>飞入，淡出</div>
  {/if}