import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	vite: {
		build: {
			minify: 'esbuild', // 或 'esbuild'
			sourcemap: true,
			chunkSizeWarningLimit: 1000 // 块大小警告限制
		},
		// 其他Vite配置
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		
		prerender: {
			entries: ['*'] // 预渲染所有页面
		  },
		  files: {
			assets: 'static', // 静态资源目录
			lib: 'src/lib',   // 库文件目录
		  }
	},
};

export default config;
