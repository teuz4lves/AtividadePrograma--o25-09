// criar-tabela.js
const { Client } = require('pg');

const client = new Client({
  host: 'dpg-d4omn8adbo4c73f7dv00-a.oregon-postgres.render.com',
  port: 5432,
  database: 'database_projeto_i3a_hja7',
  user: 'user_database_projeto_i3a',
  password: 'P5o7Qj7I05R5AxohMWbsf4RD7FlJJ8Gc',
  ssl: { rejectUnauthorized: false }
});

async function criarTabela() {
  try {
    await client.connect();
    console.log('✅ Conectado ao PostgreSQL do Render');
    
    const sql = `
      CREATE TABLE IF NOT EXISTS manutencao (
        id SERIAL PRIMARY KEY,
        data DATE,
        descricao VARCHAR(255),
        custo DECIMAL(10,2),
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await client.query(sql);
    console.log('✅ Tabela "manutencao" criada com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await client.end();
  }
}

criarTabela();