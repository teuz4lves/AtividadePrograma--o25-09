import { Pagamento } from "../../../database/tables";
import { redirect } from "next/navigation";

async function inserePagamento(formData) {
    "use server";
    const dados = {
        forma_de_pagamento: formData.get("forma_de_pagamento"),
        valor: formData.get("valor"),
        data_do_pagamento: formData.get("data_do_pagamento"),
    };
    await Pagamento.create(dados);
    redirect("/pagamentos");
}

function TelaNovoPagamento() {
    return (
        <div>
            <h1>Novo Pagamento</h1>
            <a href="/pagamentos"> Voltar para Lista de Pagamentos</a>
            
            <form action={inserePagamento}>
                <label>Forma de Pagamento</label><br/>
                <select name="forma_de_pagamento" required>
                    <option value="">Selecione...</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <option value="PIX">PIX</option>
                    <option value="Transferência Bancária">Transferência Bancária</option>
                    <option value="Boleto">Boleto</option>
                </select><br/>

                <label>Valor (R$)</label><br/>
                <input type="number" name="valor" step="0.01" min="0" required /><br/>

                <label>Data do Pagamento</label><br/>
                <input type="date" name="data_do_pagamento" required /><br/>

                <button>Cadastrar Pagamento</button>
            </form>
        </div>
    );
}

export default TelaNovoPagamento;