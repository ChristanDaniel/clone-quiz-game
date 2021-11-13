import styles from './style.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(props: EstatisticaProps) {
    <div className={styles.estastisca}>
        <div className={styles.valor} style={{
            backgroundColor: props.corFundo ?? '#FDD60F',
            color: props.corFonte ?? '#333'
        }}>
            {props.valor}
        </div>
        <div className={styles.texto}>
            {props.texto}
        </div>
    </div>
}