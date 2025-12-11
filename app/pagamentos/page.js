import { Pagamento } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaPagamento(formData) {
    "use server";
    const id = formData.get("id");
    await Pagamento.destroy({ where: { id } });
    redirect("/pagamentos");
}

export default async function ListaPagamentos() {
    const pagamentos = await Pagamento.findAll();

    return (
        <div>
            <h1>Pagamentos</h1>
            <a href="/pagamentos/novo">Novo Pagamento</a>
            <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Forma de Pagamento</th>
                        <th>Valor (R$)</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {pagamentos.map((pag) => (
                        <tr key={pag.id}>
                            <td>{pag.id}</td>
                            <td>{pag.forma_de_pagamento}</td>
                            <td>{pag.valor}</td>
                            <td>{pag.data_do_pagamento}</td>

                            <td>
                                {/* Botão Editar (igual ao padrão que você usa) */}
                                <form action={"pagamentos/edita"}>
                                    <input type="hidden" name="id" defaultValue={pag.id} />
                                    <button>Editar</button>
                                </form>

                                {/* Botão Excluir */}
                                <form action={deletaPagamento} style={{ marginTop: "5px" }}>
                                    <input type="hidden" name="id" defaultValue={pag.id} />
                                    <button>Excluir</button>
                                </form>
                            </td>
                        </tr>
                    ))}

                    {pagamentos.length === 0 && (
                        <tr>
                            <td colSpan="5">Nenhum pagamento encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
