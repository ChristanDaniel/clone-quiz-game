import RespostaModel from '../../model/resposta'
import styles from './styles.module.css'

interface EnuciadoProps {
    valor: RespostaModel
    indice: number
    letra: string
    backgroundLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: EnuciadoProps) {
    const resposta = props.valor

    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudoResposta}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{ backgroundColor: props.backgroundLetra}}>{props.letra}</div>
                    <div className={styles.valor}>{resposta.valor}</div>
                </div>
                <div className={styles.verso}></div>
            </div>
        </div>
    )
}