import { embaralhar } from "../../../src/functions/embaralharArray";
import questoes from "../bancoDeQuestoes";

export default function Questionario(req, res) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}