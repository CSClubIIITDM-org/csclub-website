import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html

		adapter: staticAdapter(),
	},
};

export default config;
