import { redirect } from "next/navigation";
import { Funcionario } from "../../database/tables";

async function deletarFuncionario(formData) {
    "use server";

    const id = formData.get("id");
    const funcionario = await Funcionario.findByPk(id);

    await funcionario.destroy();
    redirect("/funcionarios");
}

export default async function Funcionarios() {
    const funcionarios = await Funcionario.findAll();

    return (
        <div>
            <h1>Funcionários</h1>
            <a href="/funcionarios/novo">Novo Funcionário</a>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {funcionarios.map((f) => (
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.nome}</td>
                            <td>{f.sobrenome}</td>
                            <td>{f.telefone}</td>
                            <td>{f.cpf}</td>

                            <td>
                                <form action="/funcionarios/edita">
                                    <input type="hidden" name="id" defaultValue={f.id} />
                                    <button>Editar</button>
                                </form>

                                <form action={deletarFuncionario}>
                                    <input type="hidden" name="id" defaultValue={f.id} />
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
