import QuestaoModel from "../../model/questao";
import Enuciado from "../Enuciado";
import styles from "./Questao.module.css"

import Resposta from '../Resposta'

interface QuestaoProps {
    valor: QuestaoModel
}


export default function Questao(props: QuestaoProps) {
    const questao = props.valor
    return (
        <div className={styles.questao}>
            <Enuciado texto={questao.enuciado}/>
            {questao.respostas.map((resposta, ind) => {
                return (
                    <Resposta key={resposta.valor} valor={resposta} indice={ind} letra="A" corLetra="#F2C866"/>
                )
            })}
        </div>
    )
}