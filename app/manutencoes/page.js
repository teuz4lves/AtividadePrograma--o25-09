import { Manutencao } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletarManutencao(formData) {
    "use server";
    const id = formData.get("id");

    const manutencao = await Manutencao.findByPk(id);
    await manutencao.destroy();

    redirect("/manutencoes");
}

export default async function Manutencoes() {
    const manutencoes = await Manutencao.findAll();

    return (
        <div>
            <h1>Manutenções</h1>

            <a href="/manutencoes/novo">Nova Manutenção</a>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Custo</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {manutencoes.map((m) => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.data}</td>
                            <td>{m.descricao}</td>
                            <td>R$ {m.custo}</td>

                            <td>
                                <form action={"/manutencoes/edita"}>
                                    <input type="hidden" name="id" defaultValue={m.id} />
                                    <button>Editar</button>
                                </form>

                                <form action={deletarManutencao}>
                                    <input type="hidden" name="id" defaultValue={m.id} />
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
