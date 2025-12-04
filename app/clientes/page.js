import { redirect } from "next/navigation";
import { Cliente } from "../../database/tables";

async function deletarClientes (formData) {
    'use server';
    const id = formData.get('id');
    const clientes = await Cliente.findByPk(id);
    await clientes.destroy();
    redirect("/clientes");
}


async function Clientes() {
    const clientes = await Cliente.findAll();

    return (
        <div>
            <h1>Clientes</h1>
            <a href="/clientes/novo">Novo cliente</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Nascimento</th>
                        <th>Cidade</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.sobrenome}</td>
                            <td>{cliente.nascimento}</td>
                            <td>{cliente.cidade}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.cpf}</td>
                            <td>
                                <form action = {'/clientes/edita'}>
                                    <input type="hidden" name="id" defaultValue={cliente.id} />
                                    <button> Editar </button>
                                </form>

                                <form action = {deletarClientes}>
                                    <input type="hidden" name="id" defaultValue={cliente.id} />
                                    <button> Excluir </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clientes;
