const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importando conexão com o banco

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },{ 
        timestamps:true
    });



module.exports = User;
