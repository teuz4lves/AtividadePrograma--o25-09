import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'database_projeto_i3a_hja7', // ← CORRIGIDO: i3a, não 13a
  'user_database_projeto_i3a', // ← CORRIGIDO: i3a, não 13a
  'P5o7Qj7I05R5AxohMWbsf4RD7FlJJ8Gc', // senha
  {
    host: 'dpg-d4omn8adbo4c73f7dv00-a.oregon-postgres.render.com', // ← use o externo
    port: 5432,
    dialect: 'postgres',
    dialectModule: require('pg'),
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Testar conexão
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com PostgreSQL (Render) estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao PostgreSQL:', error);
  }
};
testConnection();
export default sequelize;