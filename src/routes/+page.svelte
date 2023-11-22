<script>
    import { goto } from '$app/navigation';
    import getQuestoes from '$lib/default_questions'
    import { questoes as questoes_store } from '$lib/questoesdb';
    import { getModalStore } from '@skeletonlabs/skeleton';
			
    const modalStore = getModalStore();

    const questoes_data = getQuestoes();
    console.log(questoes_data)

    const arr = [
        {
            dificuldade: 'Fácil',
            difclass: 'bg-green-500',
            questoes: [1,2,3,4]
        },
        {
            dificuldade: 'Média',
            difclass: 'bg-yellow-500',
            questoes: [5,6,7]
        },
        {
            dificuldade: 'Difícil',
            difclass: 'bg-red-600',
            questoes: [8,9,10]
        }
    ]
    // Clone and reverse it
    const reversed =
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
        const questao = $questoes_store[questaoi-1] ?? {}
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
                <p>
                    <button on:click={() => goQuestao(questaoi)} class="w-full">
                        Questão {questaoi} <br />
                        <small>{$questoes_store[questaoi-1]?.resolvido ? 'Resolvido' : ''}</small>
                    </button>
                </p>
	        {/each}
	    {/each}
    </div>

</center>

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