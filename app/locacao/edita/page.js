import { redirect } from "next/navigation";
import { Cliente } from "../../../database/tables";

async function editaCliente(formData) {
    "use server"
    const id = formData.get('id');
    const nome = formData.get('nome');
    const sobrenome = formData.get('sobrenome');
    const nascimento = formData.get('nascimento');
    const cidade = formData.get('cidade');
    const telefone = formData.get('telefone');
    const cpf = formData.get('cpf');

    const clientes = await Cliente.findByPk(id);
    clientes.nome = nome;
    clientes.sobrenome = sobrenome;
    clientes.nascimento = nascimento;
    clientes.cidade = cidade;
    clientes.telefone = telefone;
    clientes.cpf = cpf;

    await clientes.save();

    redirect('/clientes');

}

async function TelaEditaClientes({searchParams}) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
        <>
            <h1>Editando a Locação </h1>

            <form action={editaCliente}>

                <input type="text" name="id" defaultValue={cliente.id} /> <br />

                <label>Nome</label><br />
                <input type="text" name="nome" defaultValue={cliente.nome} /> <br />

                <label>Sobrenome</label><br />
                <input type="text" name="sobrenome" defaultValue={cliente.sobrenome} /> <br />

                <label>Nascimento</label><br />
                <input type="date" name="nascimento" defaultValue={cliente.nascimento} /> <br />

                <label>Cidade</label><br />
                <input type="text" name="cidade" defaultValue={cliente.cidade} /> <br />

                <label>Telefone</label><br />
                <input type="text" name="telefone" defaultValue={cliente.telefone} /> <br />

                <label>CPF</label><br />
                <input type="text" name="cpf" defaultValue={cliente.cpf} /> <br />

                <button>Confirmar</button>
            </form>

        </>
    )

}
export default TelaEditaLocacao;