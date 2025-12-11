import { redirect } from "next/navigation";
import { Locacao } from "../../../database/tables";

async function insereLocacao(formData) {
    "use server";

    const dados = {
        dataInicio: formData.get("dataInicio"),
        dataFim: formData.get("dataFim"),
        valorTotal: formData.get("valorTotal"),
    };

    await Locacao.create(dados);
    redirect("/locacao");
}

export default function TelaNovaLocacao() {
    return (
        <form action={insereLocacao} className="form-container">
            <label>Data Início</label>
            <input type="date" name="dataInicio" />

            <label>Data Fim</label>
            <input type="date" name="dataFim" />

            <label>Valor Total</label>
            <input type="number" step="0.01" name="valorTotal" />

            <button className="btn">Cadastrar</button>
        </form>
    );
}
