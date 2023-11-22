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

/**
 * @type {import("svelte/store").Writable<any>}
 */
export let questoes = writable(getSavedQuestoes());

let watching = false;
export function initwatcher_questoes() {
    if(watching) return;
    watching = true;

    jsonwatcher(questoes, "./questoes.json", getSavedQuestoes());
}