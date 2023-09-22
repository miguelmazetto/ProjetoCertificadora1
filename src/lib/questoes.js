import { jsonwatcher } from "./jsonwatcher";
import default_questoes from "./default_questoes.json"
import { writable } from "svelte/store";

/**
 * @type {import("svelte/store").Writable<any>}
 */
export let questoes = writable(default_questoes);
let watching = false;

export function initwatcher_questoes() {
    if(watching) return;
    watching = true;

    jsonwatcher(questoes, "./questoes.json", default_questoes);
}