import adapter from './neutralino/adapter.js';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
    kit: {
        adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		})
        //adapter: adapter({
        //    // default options are shown
        //    name: "ProjetoCertComp1",
        //    applicationId: "dev.utfprgroup.certcomp1",
        //    icon: "favicon.png",
        //    window: {
        //        width: 800,
        //        height: 500,
        //        minWidth: 400,
        //        minHeight: 200,
        //        resizable: true,
        //        maximize: false,
        //    },
        //    output: "build",
        //    versions: {
        //        client: "3.12.0",
        //        binary: "4.14.0",
        //    },
        //}),
    },
};
export default config;