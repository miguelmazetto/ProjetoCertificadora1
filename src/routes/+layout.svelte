<script>
	// Importa o tema da aplicação
	import '../app.postcss';

	// Importa os componentes usados ali embaixo
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Importa Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
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
