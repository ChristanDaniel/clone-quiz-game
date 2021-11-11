import type { NextPage } from 'next'
import { useState } from 'react'
import Questao from '../src/components/Questao'
import QuestaoModel from '../src/model/questao'
import RespostaModel from '../src/model/resposta'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('verde'),
  RespostaModel.certa('Preto'),
  RespostaModel.errada('azul'),
  RespostaModel.errada('Pink'),

])

const Home: NextPage = () => {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (!questao.respondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div>
      <Questao valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado}/>
    </div>
  )
}

export default Home
