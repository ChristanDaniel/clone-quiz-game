import type { NextPage } from 'next'
import Questao from '../src/components/Questao'
import QuestaoModel from '../src/model/questao'
import RespostaModel from '../src/model/resposta'

const Home: NextPage = () => {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('verde'),
    RespostaModel.certa('Preto'),
    RespostaModel.errada('azul'),
    RespostaModel.errada('Pink'),

  ])

  return (
    <div>
      <Questao valor={questaoTeste}/>
    </div>
  )
}

export default Home
