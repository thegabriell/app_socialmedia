const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('socialmedia', 'postgres', '92552334', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('✅ Conectado ao PostgreSQL!'))
    .catch(err => console.error('🔴 Erro ao conectar:', err));

module.exports = sequelize;
