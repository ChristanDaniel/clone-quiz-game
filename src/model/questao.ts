import { embaralhar } from "../functions/embaralharArray"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enuciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enuciado: string, respostas: RespostaModel[], acertou = false) {
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
        for (let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }

        return false
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resp, ind) => {
            const respostaSelecionada = indice === ind
            const deveRevelar = respostaSelecionada || resp.certa
            return deveRevelar ? resp.revelar() : resp
        })
        return new QuestaoModel(this.#id, this.#enuciado, respostas, acertou)
    }

    embaralharRespostas():QuestaoModel {
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enuciado, respostasEmbaralhadas, this.#acertou)
    }

    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enuciado, respostas , obj.acertou)
    }

    paraObjeto() {
        return {
            id: this.#id,
            enuciado: this.#enuciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            resposta: this.#respostas.map(resp => resp.paraObjeto()),
        }
    }
}