import { Cliente } from "../../../database/tables";
import { redirect } from "next/navigation";

async function insereCliente(formData) {
    "use server";
    const dados = {
        nome: formData.get("nome"),
        sobrenome: formData.get("sobrenome"),
        nascimento: formData.get("nascimento"),
        cidade: formData.get("cidade"),
        telefone: formData.get("telefone"),
        cpf: formData.get("cpf"),
    };
    await Cliente.create(dados);
    redirect("/clientes");
}

function TelaNovoCliente() {
    return (
        <form action={insereCliente}>
            <label>Nome</label><br/>
            <input type="text" name="nome" /><br/>

            <label>Sobrenome</label><br/>
            <input type="text" name="sobrenome" /><br/>

            <label>Nascimento</label><br/>
            <input type="date" name="nascimento" /><br/>

            <label>Cidade</label><br/>
            <input type="text" name="cidade" /><br/>

            <label>Telefone</label><br/>
            <input type="text" name="telefone" /><br/>

            <label>CPF</label><br/>
            <input type="text" name="cpf" /><br/>

            <button>Cadastrar</button>
        </form>
    );
}

export default TelaNovoCliente;
