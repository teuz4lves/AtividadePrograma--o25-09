import { Locacao } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereLocacao(formData) {
    'use server';
    const dados = {
        dataInicio: formData.get('dataInicio'),
        dataFim: formData.get('dataFim'),
        valorTotal: formData.get('valorTotal'),
        //ClienteId: formData.get('clienteId'),
        //ProdutoId: formData.get('produtoId')
    };
    await Locacao.create(dados);
    redirect('/locacao');
}

function TelaNovaLocacao() {
    return (
        <form action={insereLocacao}>
            <label htmlFor="dataInicio">Data Início</label><br/>
            <input type="date" name="dataInicio" /><br/>

            <label htmlFor="dataFim">Data Fim</label><br/>
            <input type="date" name="dataFim" /><br/>

            <label htmlFor="valorTotal">Valor Total</label><br/>
            <input type="number" step="0.01" name="valorTotal" /><br/>

            <label htmlFor="clienteId">Cliente ID</label><br/>
            <input type="number" name="clienteId" /><br/>

            <label htmlFor="produtoId">Produto ID</label><br/>
            <input type="number" name="produtoId" /><br/>

            <button>Cadastrar Locação</button>
        </form>
    )
}

export default TelaNovaLocacao;
