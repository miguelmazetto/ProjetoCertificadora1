<script>
	// Importa o tema da aplicação
	import '../app.postcss';

	// Importa os componentes usados ali embaixo
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Importa Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
  	import { onMount } from 'svelte';
	import { setNeutralino, Neutralino } from '$lib/neutralino.js';
	import { initwatcher_questoes } from '$lib/questoesdb';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(() => {
		// Get access to Neutralino Native API
		if(window.Neutralino){
			window.Neutralino.init();
			setNeutralino(window.Neutralino);
			Neutralino?.debug.log("Started:", Neutralino.debug.LoggerType.INFO);

			window.addEventListener( "error" , (e) => {
				Neutralino?.debug.log(JSON.stringify(e), Neutralino.debug.LoggerType.ERROR);
			})
		}

		initwatcher_questoes();
	})
</script>

<AppShell>

	<!-- Barra do topo -->
	<svelte:fragment slot="header">
		<AppBar>

			<!-- Titulo da Aplicação -->
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					Projeto de Certificadora 1
				</strong>
			</svelte:fragment>

			<!-- Talvez colocar a pontuação do usuário aqui -->

			<!-- Link para o repositório -->
			<svelte:fragment slot="trail">
				<a  class="btn btn-sm variant-ghost-surface"
					href="https://github.com/miguelmazetto/ProjetoCertificadora1"
					target="_blank"
					rel="noreferrer"> GitHub </a>
			</svelte:fragment>

		</AppBar>
	</svelte:fragment>

	<!-- Aplicação será inserida aqui -->
	<slot />

</AppShell>
