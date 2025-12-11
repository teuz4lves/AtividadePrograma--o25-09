import { redirect } from "next/navigation";
import { Cliente } from "../../database/tables";

async function deletarClientes(formData) {
    'use server';
    const id = formData.get("id");
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    redirect("/clientes");
}

export default async function Clientes() {
    const clientes = await Cliente.findAll();

    return (
        <div className="container">
            <h1>Clientes</h1>

            <a className="botao" href="/clientes/novo">Novo Cliente</a>

            <table className="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Nascimento</th>
                        <th>Cidade</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nome}</td>
                            <td>{c.sobrenome}</td>
                            <td>{c.nascimento}</td>
                            <td>{c.cidade}</td>
                            <td>{c.telefone}</td>
                            <td>{c.cpf}</td>

                            <td className="acoes">

                                <form action="/clientes/edita">
                                    <input type="hidden" name="id" defaultValue={c.id} />
                                    <button type="submit" className="editar">
                                        Editar
                                    </button>
                                </form>

                                <form action={deletarClientes}>
                                    <input type="hidden" name="id" defaultValue={c.id} />
                                    <button type="submit" className="excluir">
                                        Excluir
                                    </button>
                                </form>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
