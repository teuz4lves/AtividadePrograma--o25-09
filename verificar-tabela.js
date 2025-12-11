// verificar-tabela.js
const { Client } = require('pg');

const client = new Client({
  host: 'dpg-d4omn8adbo4c73f7dv00-a.oregon-postgres.render.com',
  port: 5432,
  database: 'database_projeto_i3a_hja7',
  user: 'user_database_projeto_i3a',
  password: 'P5o7Qj7I05R5AxohMWbsf4RD7FlJJ8Gc',
  ssl: { rejectUnauthorized: false }
});

async function verificar() {
  try {
    await client.connect();
    
    // Verifica se a tabela existe
    const result = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'manutencao'
      );
    `);
    
    if (result.rows[0].exists) {
      console.log('✅ Tabela "manutencao" existe no banco!');
      
      // Conta quantos registros tem
      const count = await client.query('SELECT COUNT(*) FROM manutencao');
      console.log(`📊 Registros na tabela: ${count.rows[0].count}`);
    } else {
      console.log('❌ Tabela NÃO existe ainda');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await client.end();
  }
}

verificar();