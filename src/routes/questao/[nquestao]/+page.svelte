<!--
	Essa pagina vai aparecer como:
		/questao/1
		/questao/2
	E o valor será coletado na variavel 'nquestao' abaixo
-->

<script>
    import { page } from '$app/stores';
	import { questoes } from '$lib/questoes';

	const notfound = {ask: 'Nao encontrado!'}
    const nquestao = parseInt($page.params.nquestao)
	$: questao = $questoes[nquestao-1] ?? notfound;

	
</script>

<div class="card p-4 m-4">
	<p class="text-center text-2xl">
    	<b>Questão {nquestao}</b>
	</p>
	<p>{questao.ask}</p>
</div>