const User = require('../models/User');
const bcrypt = require('bcrypt');

// Registrar novo usuário
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send('Erro ao registrar usuário: ' + err.message);
    }
};

// Fazer login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.redirect('/home'); // Direciona para o feed
        } else {
            res.status(400).send('Usuário ou senha inválidos.');
        }
    } catch (err) {
        res.status(400).send('Erro ao fazer login: ' + err.message);
    }
};
