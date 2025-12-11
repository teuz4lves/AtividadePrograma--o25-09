import { Manutencao } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereManutencao(formData) {
    "use server";

    const dados = {
        data: formData.get("data"),
        descricao: formData.get("descricao"),
        custo: formData.get("custo"),
    };

    await Manutencao.create(dados);
    redirect("/manutencoes");
}

export default function TelaNovaManutencao() {
    return (
        <>
            <h1>Nova Manutenção</h1>
            <a href="/manutencoes">Voltar</a>

            <form action={insereManutencao} className="form-container">
                <label>Data</label>
                <input type="date" name="data" required />

                <label>Descrição</label>
                <input type="text" name="descricao" required />

                <label>Custo (R$)</label>
                <input type="number" name="custo" step="0.01" min="0" required />

                <button className="btn">Cadastrar</button>
            </form>
        </>
    );
}
