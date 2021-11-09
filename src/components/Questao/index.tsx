import QuestaoModel from "../../model/questao";
import Enuciado from "../Enuciado";
import styles from "./Questao.module.css"

interface QuestaoProps {
    valor: QuestaoModel
}


export default function Questao(props: QuestaoProps) {
    const questao = props.valor
    return (
        <div className={styles.questao}>
            <Enuciado texto={questao.enuciado}/>
        </div>
    )
}