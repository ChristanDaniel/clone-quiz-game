import RespostaModel from "../../model/resposta";
import styles from "./styles.module.css";

interface EnuciadoProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  backgroundLetra: string;
  respostaFornecida: (indice: number) => void;
}

export default function Resposta(props: EnuciadoProps) {
  const resposta = props.valor;

  return (
    <div
      className={styles.resposta}
      onClick={() => props.respostaFornecida(props.indice)}
    >
      <div className={styles.conteudoResposta}>
        {!resposta.revelada ? (
          <div className={styles.frente}>
            <div
              className={styles.letra}
              style={{ backgroundColor: props.backgroundLetra }}
            >
              {props.letra}
            </div>
            <div className={styles.valor}>{resposta.valor}</div>
          </div>
        ) : (
          <div className={styles.verso}>
            {resposta.certa ? (
              <div className={styles.certa}>
                <div>A resposta certa é...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            ) : (
              <div className={styles.errada}>
                <div>A resposta informada está errada...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
