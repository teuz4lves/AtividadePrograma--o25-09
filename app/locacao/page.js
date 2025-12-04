import { Locacao } from "../../database/tables";

async function Locacoes() {
    const locacoes = await Locacao.findAll();
    return (
        <div>
            <h1>Locações</h1>
            <a href="/locacao/novo">Nova locação</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data Início</th>
                        <th>Data Fim</th>
                        <th>Valor Total</th>
                        <th>Cliente ID</th>
                        <th>Produto ID</th>
                    </tr>
                </thead>
                <tbody>
                    {locacoes.map(function (locacao) {
                        return (
                            <tr key={locacao.id}>
                                <td>{locacao.id}</td>
                                <td>{locacao.dataInicio}</td>
                                <td>{locacao.dataFim}</td>
                                <td>{locacao.valorTotal}</td>
                                <td>{locacao.ClienteId}</td>
                                <td>{locacao.ProdutoId}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Locacoes;
