<script>
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
                <p><a href="/questao/{questaoi}">Questão {questaoi}</a></p>
	        {/each}
	    {/each}
    </div>

</center>

