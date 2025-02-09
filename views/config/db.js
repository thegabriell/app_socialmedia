const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost', // Ou o endereço do seu servidor
  dialect: 'postgres', // Define que usará PostgreSQL
  logging: false, // Desabilita logs (opcional)
});

module.exports = sequelize;
