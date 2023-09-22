import '@neutralinojs/lib/dist/neutralino.d.ts'

/**
 * @type {typeof globalThis.Neutralino | undefined}
 */
export var Neutralino;

/**
 * @param {typeof globalThis.Neutralino} newneut
 */
export function setNeutralino(newneut){
    Neutralino = newneut;
}