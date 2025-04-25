<!-- src/App.svelte -->
<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut,bounceOut } from 'svelte/easing';
  
    // 创建一个 tweened store
    const position = tweened(0, {
      duration: 400,
      easing: bounceOut
    });

    let isChange = false
  
    function move() {
        const box = document.querySelector('.container')
        const width = box.clientWidth
        isChange = !isChange
        if(isChange){
            position.set(width); // 设置随机位置
        }else{
            position.set(0); // 设置随机位置
        }
      
    }
  </script>
  
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }
  </style>
  
  <div class="w-full container">
    <button on:click={move}>Move Box</button>
    <div class="box" style:transform="translateX({$position}px)">Box</div>
  </div>

