import type { NextPage } from "next";
import router from "next/dist/client/router";
import { useEffect, useState } from "react";
import Botao from "../src/components/Botao";
import Questao from "../src/components/Questao";
import Questionario from "../src/components/Questionario";
import QuestaoModel from "../src/model/questao";
import RespostaModel from "../src/model/resposta";

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.certa("Preto"),
  RespostaModel.errada("azul"),
  RespostaModel.errada("Pink"),
]);

const BASE_URL = "http://localhost:3000/api";

const Home = () => {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const response = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await response.json();
    console.log(idsDasQuestoes);

    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const response = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await response.json();
    console.log("TESTEE", QuestaoModel.criarUsandoObjeto(json));

    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);

    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
    return idsDasQuestoes[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : (
    false
  );
}

export default Home;
