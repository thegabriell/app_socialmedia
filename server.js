const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const usuarioCorreto = 'usuario';
const senhaCorreta = 'senha123';

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === usuarioCorreto && password === senhaCorreta) {
        res.redirect('/home');
    } else {
        res.send('dados incorrentos. Tente novamente.');
    }
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/feed',(req,res) => {
    res.render('feed');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
