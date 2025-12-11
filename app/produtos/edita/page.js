import { Produto } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editaProduto(formData) {
    "use server";

    const id = formData.get("id");

    const produto = await Produto.findByPk(id);

    produto.nome = formData.get("nome");
    produto.modelo = formData.get("modelo");
    produto.voltagem = formData.get("voltagem");
    produto.combustivel = formData.get("combustivel");
    produto.capacidade = formData.get("capacidade");
    produto.status = formData.get("status");

    await produto.save();
    redirect("/produtos");
}

export default async function TelaEditaProduto({ searchParams }) {
    const id = searchParams.id;
    const p = await Produto.findByPk(id);

    return (
        <div className="form-container">
            <h1>Editar Produto</h1>

            <form action={editaProduto}>
                <input type="hidden" name="id" defaultValue={p.id} />

                <label>Nome</label>
                <input type="text" name="nome" defaultValue={p.nome} />

                <label>Modelo</label>
                <input type="text" name="modelo" defaultValue={p.modelo} />

                <label>Voltagem</label>
                <input type="text" name="voltagem" defaultValue={p.voltagem} />

                <label>Combustível</label>
                <input type="text" name="combustivel" defaultValue={p.combustivel} />

                <label>Capacidade</label>
                <input type="number" name="capacidade" defaultValue={p.capacidade} />

                <label>Status</label>
                <input type="text" name="status" defaultValue={p.status} />

                <button className="btn">Salvar Alterações</button>
            </form>
        </div>
    );
}
