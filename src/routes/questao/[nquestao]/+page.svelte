<script>
  import { goto, onNavigate } from "$app/navigation";
  import { page } from '$app/stores';
  import { questoes } from "$lib/questoesdb";
  import getQuestoes from "$lib/default_questions"
  import RadioAnswer from "$lib/RadioAnswer.svelte";
  import { canAccess } from "$lib/util";
  import { onMount } from "svelte";

  //import { getModalStore } from '@skeletonlabs/skeleton';
  //const modalStore = getModalStore();

  let nquestao = parseInt($page.params.nquestao);

  onMount(() => {
    if(!canAccess($questoes, nquestao))
      goto('/');
  })

  const static_questoes = getQuestoes();
  $: questao = static_questoes[nquestao - 1];

  /**
   * @type {any}
   */
  let resposta = '';

  $: respostadesabilitada = resposta === '' || resposta === -1;

  function gotoProxima(){
    if(nquestao >= 10)
      goto('/')
    else{
      goto(`/questao/${nquestao + 1}`)
      resposta = ''
      nquestao = nquestao + 1;
    }
  }

  function responder(){
    console.log("Responder", resposta)
    if(questao.tipo === 'dissert'){
      if(resposta.match(questao.resposta) !== null){
        console.log("\tCorreta")
        questoes.update(o => {
          console.log("Resolver", o, nquestao-1)
          o[nquestao - 1].resolvido++;
          return o;
        })
        gotoProxima();
      }else{
        console.log("\tErrada")
      }
    }else{
      if(resposta === questao.resposta){
        console.log("\tCorreta")
        questoes.update(o => {
          o[nquestao - 1].resolvido++;
          return o;
        })
        gotoProxima();
      }else{
        console.log("\tErrada", questao.resposta)
      }
    }
  }

</script>
  
<div class="p-4">
  
  <!-- Card -->
  <div class="card p-4 mb-4">
    <p class="text-center text-2xl">
      <b>Questão {nquestao}</b>
    </p>

    <!-- Enunciado -->
    <p>{@html questao.enunciado}</p>

    <!-- Dissertativa -->
    {#if questao.tipo == 'dissert'}

      <input class="input mt-2"
        title="Resposta"
        type="text"
        placeholder="Resposta"
        bind:value={resposta}
      />

    <!-- Alternativa -->
    {:else}

      <RadioAnswer
        name={"Questao"+nquestao}
        options={questao.options ?? []}
        bind:selected={resposta}
      />
      
    {/if}

  </div>
  
  <!-- Buttons -->
  <div class="flex justify-between">
    <button type="button" class="btn variant-filled"
    on:click={() => goto('/')}>
      Voltar
    </button>

    <button type="button" class="btn variant-filled" disabled={respostadesabilitada}
    on:click={responder}>
      Responder
    </button>
  </div>
  
</div>
  