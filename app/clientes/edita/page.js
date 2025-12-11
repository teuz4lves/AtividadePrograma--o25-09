import { redirect } from "next/navigation";
import { Cliente } from "../../../database/tables";

async function editaCliente(formData) {
    "use server";

    const id = formData.get("id");

    const cliente = await Cliente.findByPk(id);

    cliente.nome = formData.get("nome");
    cliente.sobrenome = formData.get("sobrenome");
    cliente.nascimento = formData.get("nascimento");
    cliente.cidade = formData.get("cidade");
    cliente.telefone = formData.get("telefone");
    cliente.cpf = formData.get("cpf");

    await cliente.save();

    redirect("/clientes");
}

export default async function TelaEditaClientes({ searchParams }) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);

    return (
        <div className="form-container">
            <h1>Editar Cliente</h1>

            <form action={editaCliente}>
                <input type="hidden" name="id" defaultValue={cliente.id} />

                <label>Nome</label>
                <input type="text" name="nome" defaultValue={cliente.nome} />

                <label>Sobrenome</label>
                <input type="text" name="sobrenome" defaultValue={cliente.sobrenome} />

                <label>Nascimento</label>
                <input type="date" name="nascimento" defaultValue={cliente.nascimento} />

                <label>Cidade</label>
                <input type="text" name="cidade" defaultValue={cliente.cidade} />

                <label>Telefone</label>
                <input type="text" name="telefone" defaultValue={cliente.telefone} />

                <label>CPF</label>
                <input type="text" name="cpf" defaultValue={cliente.cpf} />

                <button>Salvar Alterações</button>
            </form>
        </div>
    );
}
