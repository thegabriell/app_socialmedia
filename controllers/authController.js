const User = require('../models/User'); // Importa o modelo de usuário
const bcrypt = require('bcrypt'); // Para criptografar a senha

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Verifica se o email já está cadastrado
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).send('Email já está cadastrado!');
        }

        // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o usuário no banco
        await User.create({
            username,
            email,
            password: hashedPassword
        });

        console.log(`Usuário registrado: ${username}, Email: ${email}`);
        res.redirect('/home');
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send('Erro ao registrar usuário.');
    }
};
