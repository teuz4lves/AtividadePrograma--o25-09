import { redirect } from "next/navigation";
import { Funcionario } from "../../../database/tables";

async function insereFuncionario(formData) {
    "use server";

    await Funcionario.create({
        nome: formData.get("nome"),
        sobrenome: formData.get("sobrenome"),
        telefone: formData.get("telefone"),
        cpf: formData.get("cpf"),
    });

    redirect("/funcionarios");
}

export default function TelaNovoFuncionario() {
    return (
        <div className="form-container">
            <h1>Novo Funcionário</h1>

            <form action={insereFuncionario}>
                <label>Nome</label>
                <input type="text" name="nome" />

                <label>Sobrenome</label>
                <input type="text" name="sobrenome" />

                <label>Telefone</label>
                <input type="text" name="telefone" />

                <label>CPF</label>
                <input type="text" name="cpf" />

                <button>Cadastrar</button>
            </form>
        </div>
    );
}
