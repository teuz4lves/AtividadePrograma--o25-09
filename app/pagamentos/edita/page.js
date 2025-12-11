import { Pagamento } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editaPagamento(formData) {
    "use server";

    const id = formData.get("id");
    const pagamento = await Pagamento.findByPk(id);

    pagamento.forma_de_pagamento = formData.get("forma_de_pagamento");
    pagamento.valor = formData.get("valor");
    pagamento.data_do_pagamento = formData.get("data_do_pagamento");

    await pagamento.save();
    redirect("/pagamentos");
}

export default async function TelaEditaPagamento({ searchParams }) {
    const id = searchParams.id;
    const pagamento = await Pagamento.findByPk(id);

    return (
        <>
            <h1>Editar Pagamento</h1>
            <a href="/pagamentos">Voltar para Lista de Pagamentos</a>

            <form action={editaPagamento} className="form-container">
                <input type="hidden" name="id" defaultValue={pagamento.id} />

                <label>Forma de Pagamento</label>
                <select 
                    name="forma_de_pagamento"
                    defaultValue={pagamento.forma_de_pagamento}
                    required
                >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <option value="PIX">PIX</option>
                    <option value="Transferência Bancária">Transferência Bancária</option>
                    <option value="Boleto">Boleto</option>
                </select>

                <label>Valor (R$)</label>
                <input 
                    type="number"
                    step="0.01"
                    min="0"
                    name="valor"
                    defaultValue={pagamento.valor}
                    required
                />

                <label>Data do Pagamento</label>
                <input
                    type="date"
                    name="data_do_pagamento"
                    defaultValue={pagamento.data_do_pagamento}
                    required
                />

                <button className="btn">Salvar Alterações</button>
            </form>
        </>
    );
}
