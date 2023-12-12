<script>
	// Importa o tema da aplicação
	import '../app.postcss';

	// Importa os componentes usados ali embaixo
	import { AppShell, AppBar, Modal } from '@skeletonlabs/skeleton';

	// Importa Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
  	import { onMount } from 'svelte';
	import { setNeutralino, Neutralino } from '$lib/neutralino.js';

	import { initwatcher_questoes } from '$lib/questoesdb';
	import getQuestoes from '$lib/default_questions'
	import { questoes } from '$lib/questoesdb';

	initializeStores();

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

		initwatcher_questoes(questoes, $questoes);
	})

	const static_questoes = getQuestoes()
	let pontuacao = 0;

	const dif2pontos = [100,250,500];

	/* Atualizar pontuacao */
	questoes.subscribe(v => {
		pontuacao = 0;
		v.forEach(q => {
			if(q.resolvido > 0){
				const orig_dif = static_questoes[q.index].dificuldade;
				let pontos = dif2pontos[orig_dif]
				for (let i = 0; i < q.resolvido; i++) {
					pontuacao += pontos;
					pontos /= 2;
				}
			}
		})
	})
	/* Forcar primeiro update */
	questoes.update(v=>v);
</script>

<Modal />

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
				<div class="card p-2">
					Pontuação: {pontuacao}
				</div>
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
