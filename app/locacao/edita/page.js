import { redirect } from "next/navigation";
import { Locacao } from "../../../database/tables";

async function editaLocacao(formData) {
    "use server";

    const id = formData.get("id");
    const locacao = await Locacao.findByPk(id);

    locacao.dataInicio = formData.get("dataInicio");
    locacao.dataFim = formData.get("dataFim");
    locacao.valorTotal = formData.get("valorTotal");

    await locacao.save();
    redirect("/locacao");
}

export default async function TelaEditaLocacao({ searchParams }) {
    const id = searchParams.id;
    const locacao = await Locacao.findByPk(id);

    return (
        <>
            <h1>Editando Locação</h1>

            <form action={editaLocacao} className="form-container">
                <input type="hidden" name="id" defaultValue={locacao.id} />

                <label>Data Início</label>
                <input type="date" name="dataInicio" defaultValue={locacao.dataInicio} />

                <label>Data Fim</label>
                <input type="date" name="dataFim" defaultValue={locacao.dataFim} />

                <label>Valor Total</label>
                <input type="number" step="0.01" name="valorTotal" defaultValue={locacao.valorTotal} />

                <button className="btn">Confirmar</button>
            </form>
        </>
    );
}
