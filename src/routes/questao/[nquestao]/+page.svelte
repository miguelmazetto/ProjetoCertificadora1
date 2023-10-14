<script>
  import { goto } from "$app/navigation";
  import { page } from '$app/stores';
  import getQuestoes from '$lib/default_questions'
  import RadioAnswer from "$lib/RadioAnswer.svelte";

  const nquestao = parseInt($page.params.nquestao);
  const questao = getQuestoes()[nquestao - 1];

  /**
   * @type {any}
   */
  let resposta;

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
  <button type="button" class="btn variant-filled"
          on:click={() => goto('/')}>
    Voltar
  </button>
  
</div>
  