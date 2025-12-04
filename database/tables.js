import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Cliente = mysql.define("Cliente", {
  nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
  nascimento: DataTypes.DATEONLY,
  cidade: DataTypes.STRING,
  telefone: DataTypes.STRING,
  cpf: DataTypes.STRING,
});

const Funcionario = mysql.define("Funcionario", {
  nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
  telefone: DataTypes.STRING,
  cpf: DataTypes.STRING,
});

const Produto = mysql.define("Produto", {
  nome: DataTypes.STRING,
  modelo: DataTypes.STRING,
  voltagem: DataTypes.STRING,
  combustivel: DataTypes.STRING,
  capacidade: DataTypes.INTEGER,
  status: DataTypes.STRING, 
});


const Locacao = mysql.define("Locacao", {
  dataInicio: DataTypes.DATEONLY,
  dataFim: DataTypes.DATEONLY,
  valorTotal: DataTypes.DECIMAL(10, 2),
});

const Pagamento = mysql.define("Pagamento", {
  forma_de_pagamento: DataTypes.STRING,
  valor: DataTypes.DECIMAL(10, 2),
  data_do_pagamento: DataTypes.DATEONLY,
});

const Manutencao = mysql.define("Manutencao", {
  data: DataTypes.DATEONLY,
  descricao: DataTypes.STRING,
  custo: DataTypes.DECIMAL(10, 2),
});

const Estoque = mysql.define("Estoque", {
  descricao: DataTypes.STRING,
  quantidade: DataTypes.INTEGER,
});

const Fornecedor = mysql.define("Fornecedor", {
  fornecedor: DataTypes.STRING,
  cidade: DataTypes.STRING,
});


Cliente.hasMany(Locacao);
Locacao.belongsTo(Cliente);

Produto.hasMany(Locacao);
Locacao.belongsTo(Produto);

// Locacao.hasMany(Pagamento);
// Pagamento.belongsTo(Locacao);

Produto.hasMany(Manutencao);
Manutencao.belongsTo(Produto);

Funcionario.hasMany(Manutencao);
Manutencao.belongsTo(Funcionario);

Produto.hasOne(Estoque);
Estoque.belongsTo(Produto);

Fornecedor.hasMany(Produto);
Produto.belongsTo(Fornecedor);


mysql.sync();

export {
  Cliente,
  Funcionario,
  Produto,
  Locacao,
  Pagamento,
  Manutencao,
  Estoque,
  Fornecedor,
  mysql,
};
