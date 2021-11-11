import QuestaoModel from "../../model/questao";
import Enuciado from "../Enuciado";
import styles from "./Questao.module.css"

import Resposta from '../Resposta'

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
}


export default function Questao(props: QuestaoProps) {
    const questao = props.valor
    return (
        <div className={styles.questao}>
            <Enuciado texto={questao.enuciado}/>
            {questao.respostas.map((resposta, ind) => {
                return (
                    <Resposta 
                    key={resposta.valor}
                    valor={resposta} 
                    indice={ind} 
                    letra={letras[ind].valor} 
                    backgroundLetra={letras[ind].cor}
                    respostaFornecida={props.respostaFornecida}
                    />
                )
            })}
        </div>
    )
}