import QuestaoModel from "../../model/questao";
import Botao from "../Botao";
import Questao from "../Questao";
import styles from './style.module.css'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(!props.questao.respondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }

    }

    return (
        <div className={styles.questionario}>
            <Questao 
                valor={props.questao}
                tempoPraResposta={6}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irPraProximoPasso}
            />

            <Botao 
              onClick={props.irPraProximoPasso}
              texto={props.ultima ? 'Finalizar' : 'Próxima'}
            />
        </div>
    )
}