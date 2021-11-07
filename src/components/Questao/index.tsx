import QuestaoModel from "../../model/questao";
import styles from "./Questao.module.css"

interface QuestaoProps {
    valor: QuestaoModel
}


export default function Questao(props: QuestaoProps) {
    return (
        <div className={styles.questao}>

        </div>
    )
}