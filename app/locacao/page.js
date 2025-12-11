import { redirect } from "next/navigation";
import { Locacao } from "../../database/tables";

async function deletarLocacao(formData) {
    "use server";

    const id = formData.get("id");
    const locacao = await Locacao.findByPk(id);

    await locacao.destroy();
    redirect("/locacao");
}

export default async function Locacoes() {
    const locacoes = await Locacao.findAll();

    return (
        <div>
            <h1>Locações</h1>
            <a href="/locacao/novo">Nova Locação</a>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data Início</th>
                        <th>Data Fim</th>
                        <th>Valor Total</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {locacoes.map((loc) => (
                        <tr key={loc.id}>
                            <td>{loc.id}</td>
                            <td>{loc.dataInicio}</td>
                            <td>{loc.dataFim}</td>
                            <td>{loc.valorTotal}</td>

                            <td>
                                <form action="/locacao/edita">
                                    <input type="hidden" name="id" defaultValue={loc.id} />
                                    <button>Editar</button>
                                </form>

                                <form action={deletarLocacao}>
                                    <input type="hidden" name="id" defaultValue={loc.id} />
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
