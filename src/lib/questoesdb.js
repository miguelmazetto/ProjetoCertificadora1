import { jsonwatcher } from "./jsonwatcher";
import { writable } from "svelte/store";
import getQuestoes from "$lib/default_questions"

function getSavedQuestoes(){
    return getQuestoes().map(e => {
        let ne = Object.assign({}, e)
        // @ts-ignore
        delete ne.resposta;
        return ne;
    })
}

export let questoes = writable(getSavedQuestoes());

let watching = false;

/**
 * @param {any} questoes_data
 * @param {typeof questoes} questoes_store
 */
export function initwatcher_questoes(questoes_store, questoes_data) {
    if(watching) return;
    watching = true;

    jsonwatcher(questoes_store, "./questoes.json", questoes_data);
}