import { Produto } from "../../../database/tables";
import { redirect } from "next/navigation";

async function inserirProduto(formData) {
    "use server";

    const dados = {
        nome: formData.get("nome"),
        modelo: formData.get("modelo"),
        voltagem: formData.get("voltagem"),
        combustivel: formData.get("combustivel"),
        capacidade: formData.get("capacidade"),
        status: formData.get("status"),
    };

    await Produto.create(dados);
    redirect("/produtos");
}

export default function TelaNovoProduto() {
    return (
        <div className="form-container">
            <h1>Novo Produto</h1>

            <a className="botao" href="/produtos">Voltar</a>

            <form action={inserirProduto}>
                <label>Nome</label>
                <input type="text" name="nome" required />

                <label>Modelo</label>
                <input type="text" name="modelo" required />

                <label>Voltagem</label>
                <input type="text" name="voltagem" required />

                <label>Combustível</label>
                <input type="text" name="combustivel" required />

                <label>Capacidade</label>
                <input type="number" name="capacidade" min="0" required />

                <label>Status</label>
                <input type="text" name="status" required />

                <button className="btn">Cadastrar Produto</button>
            </form>
        </div>
    );
}
