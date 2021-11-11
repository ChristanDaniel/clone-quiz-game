import  styles from './style.module.css'
import Link from 'next/link'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {
    function rederizarBotao() {
        return (
            <button className={styles.botao}
              onClick={props.onClick}
            >
                {props.texto}
            </button>
        )
    }
    
    return props.href ? (
        <Link href={props.href}>
           {rederizarBotao()}
        </Link>
    ) : rederizarBotao()
}