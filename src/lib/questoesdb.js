import { jsonwatcher } from "./jsonwatcher";
import { writable } from "svelte/store";
import getQuestoes from "$lib/default_questions"

function getSavedQuestoes(){
    // @ts-ignore
    return getQuestoes().map(e => (delete e.resposta, e))
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