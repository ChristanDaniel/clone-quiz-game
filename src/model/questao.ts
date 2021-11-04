export default class QuestaoModel {
    #id: string
    #enuciado: string
    #respostas: any[]
    #acertou: boolean

    constructor(id: string, enuciado: string, respostas: any[], acertou = false) {
        this.#id = id
        this.#enuciado = enuciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }

    get enuciado() {
        return this.#enuciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get respondida() {
        return false
    }
}