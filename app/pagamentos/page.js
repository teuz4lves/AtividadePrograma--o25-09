import { Pagamento } from "../../database/tables";

async function Pagamentos() {
    const pagamentos = await Pagamento.findAll();
    return (
        <div>
            <h1>Pagamentos</h1>
            <a href="/pagamentos/novo">Novo Pagamento</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Forma</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {pagamentos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.forma_de_pagamento}</td>
                            <td>{p.valor}</td>
                            <td>{p.data_do_pagamento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pagamentos;