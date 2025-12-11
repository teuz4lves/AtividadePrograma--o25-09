import { Manutencao } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editaManutencao(formData) {
    "use server";

    const id = formData.get("id");
    const manutencao = await Manutencao.findByPk(id);

    manutencao.data = formData.get("data");
    manutencao.descricao = formData.get("descricao");
    manutencao.custo = formData.get("custo");

    await manutencao.save();
    redirect("/manutencoes");
}

export default async function TelaEditaManutencao({ searchParams }) {
    const id = searchParams.id;
    const m = await Manutencao.findByPk(id);

    return (
        <>
            <h1>Editando Manutenção</h1>

            <form action={editaManutencao} className="form-container">
                <input type="hidden" name="id" defaultValue={m.id} />

                <label>Data</label>
                <input type="date" name="data" defaultValue={m.data} />

                <label>Descrição</label>
                <input type="text" name="descricao" defaultValue={m.descricao} />

                <label>Custo (R$)</label>
                <input type="number" name="custo" step="0.01" defaultValue={m.custo} />

                <button className="btn">Confirmar</button>
            </form>
        </>
    );
}
