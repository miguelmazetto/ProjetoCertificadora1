import getQuestoes from "./default_questions"

const static_questoes = getQuestoes();

/**
 * @param {number} questaoi
 * @param {any[]} questoes
 */
export function canAccess(questoes, questaoi){
    if(questoes[questaoi-1].resolvido > 0)
        return true;
    
    const dif = static_questoes[questaoi - 1].dificuldade;
    if(dif == 0)
        return true;
    if(dif == 1)
        return questoes.some(v => v.dificuldade == 0 && v.resolvido > 0);
    return questoes.some(v => v.dificuldade == 1 && v.resolvido > 0);
}