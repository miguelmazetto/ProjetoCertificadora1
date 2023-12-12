<script>
    import { goto } from '$app/navigation';
    import { questoes } from '$lib/questoesdb';
  import { canAccess } from '$lib/util';
    import { getModalStore } from '@skeletonlabs/skeleton';
			
    const modalStore = getModalStore();

    //console.log($questoes)
    const qstore = questoes;

    $: arr = [
        {
            dificuldade: 'Fácil',
            difclass: 'bg-green-500',
            questoes: $questoes.filter(v => v.dificuldade == 0).map(v => v.index)
        },
        {
            dificuldade: 'Média',
            difclass: 'bg-yellow-500',
            questoes: $questoes.filter(v => v.dificuldade == 1).map(v => v.index)
        },
        {
            dificuldade: 'Difícil',
            difclass: 'bg-red-600',
            questoes: $questoes.filter(v => v.dificuldade == 2).map(v => v.index)
        }
    ]
    // Clone and reverse it
    $: reversed =
        arr.slice()                                                    // Clone
            .map(e => Object.assign({},e))                             // Clone elements
            .reverse()                                                 // Reverse dificulties
            .map(e => (e.questoes = e.questoes.slice().reverse(), e)); // Reverse questoes

    var order = false;

    // Automatically updates if any of the elements change value, in this
    // case it will change if order is changed
    $: ordered_arr = order ? reversed : arr;

    /**
    * @param {number} questaoi
    */
    function goQuestao(questaoi){
        if(!canAccess($questoes, questaoi)) return;

        const questao = $questoes[questaoi-1] ?? {}
        if(questao.resolvido){
            modal.response = r => (r && goto(`/questao/${questaoi}`), r);
            // @ts-ignore
            modalStore.trigger(modal);
            return;
        }
        goto(`/questao/${questaoi}`)
    }

    const modal = {
    	type: "confirm",
    	title: 'Fazer Exercício',
    	body: 'Voce já resolveu esse exercício, deseja resolve-lo novamente?',
        buttonTextConfirm: 'Resolver',
        buttonTextCancel: 'Cancelar',
    	response: (/** @type {boolean} */ r) => r,
    };

</script>

<center>

    <div class="btn-group-vertical variant-ghost" >
        <button on:click={() => order = !order}>
            Ordem {order ? '˅' : '˄'}
        </button>

        {#each ordered_arr as {dificuldade, difclass, questoes}}
            <div class={difclass}>
                <b>{dificuldade}</b>
            </div>
            {#each questoes as questaoi}
                <p class={$qstore[questaoi-1].resolvido > 0 ? "grid grid-cols-3" : ""}>

                    <button
                        on:click={() => goQuestao(questaoi)}
                        class="w-full col-span-2"
                        disabled={!canAccess($qstore, questaoi)}
                    >
                        Questão {questaoi} <br />

                        <!-- Marcacao de resolvido -->
                        {#if $qstore[questaoi-1].resolvido > 0}
                            <small>Resolvido</small>
                        {/if}
                    </button>

                    <!-- Seletor de dificuldade -->
                    {#if $qstore[questaoi-1].resolvido > 0}
                        <select class="select" bind:value={$qstore[questaoi-1].dificuldade}>
                            <option value=0>Fácil</option>
                            <option value=1>Média</option>
                            <option value=2>Difícil</option>
                        </select>
                    {/if}
                </p>
	        {/each}
	    {/each}
    </div>

</center>

<!-- Utilizado para indicar que essas paginas devem ser incluidas -->
<!-- Apenas para referencia, e nao sera mostrado na pagina -->
<div style="display: none;">
    <a href="/questao/1">q</a>
    <a href="/questao/2">q</a>
    <a href="/questao/3">q</a>
    <a href="/questao/4">q</a>
    <a href="/questao/5">q</a>
    <a href="/questao/6">q</a>
    <a href="/questao/7">q</a>
    <a href="/questao/8">q</a>
    <a href="/questao/9">q</a>
    <a href="/questao/10">q</a>
</div>