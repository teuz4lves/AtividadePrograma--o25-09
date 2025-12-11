import { redirect } from "next/navigation";
import { Funcionario } from "../../../database/tables";

async function editaFuncionario(formData) {
    "use server";

    const id = formData.get("id");
    const funcionario = await Funcionario.findByPk(id);

    funcionario.nome = formData.get("nome");
    funcionario.sobrenome = formData.get("sobrenome");
    funcionario.telefone = formData.get("telefone");
    funcionario.cpf = formData.get("cpf");

    await funcionario.save();
    redirect("/funcionarios");
}

export default async function TelaEditaFuncionario({ searchParams }) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);

    return (
        <div className="form-container">
            <h1>Editar Funcionário</h1>

            <form action={editaFuncionario}>
                <input type="hidden" name="id" defaultValue={funcionario.id} />

                <label>Nome</label>
                <input type="text" name="nome" defaultValue={funcionario.nome} />

                <label>Sobrenome</label>
                <input type="text" name="sobrenome" defaultValue={funcionario.sobrenome} />

                <label>Telefone</label>
                <input type="text" name="telefone" defaultValue={funcionario.telefone} />

                <label>CPF</label>
                <input type="text" name="cpf" defaultValue={funcionario.cpf} />

                <button>Salvar Alterações</button>
            </form>
        </div>
    );
}
