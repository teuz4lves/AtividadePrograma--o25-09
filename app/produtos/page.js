import { Produto } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletarProduto(formData) {
    "use server";
    const id = formData.get("id");
    const produto = await Produto.findByPk(id);
    await produto.destroy();
    redirect("/produtos");
}

export default async function Produtos() {
    const produtos = await Produto.findAll();

    return (
        <div>
            <h1>Produtos</h1>

            <a href="/produtos/novo">Novo Produto</a>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Modelo</th>
                        <th>Voltagem</th>
                        <th>Combustível</th>
                        <th>Capacidade</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.modelo}</td>
                            <td>{p.voltagem}</td>
                            <td>{p.combustivel}</td>
                            <td>{p.capacidade}</td>
                            <td>{p.status}</td>

                            <td>
                                <form action={"/produtos/edita"}>
                                    <input type="hidden" name="id" defaultValue={p.id} />
                                    <button>Editar</button>
                                </form>

                                <form action={deletarProduto}>
                                    <input type="hidden" name="id" defaultValue={p.id} />
                                    <button>Excluir</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
