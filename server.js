const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.post('/home', (req, res) => {
    const { username, password } = req.body;

    // Aqui você pode verificar os dados de login
    if (username === 'admin' && password === '1234') {
        res.send(`
            <h1>Bem-vindo, ${username}!</h1>
            <p>Autenticação realizada com sucesso!</p>
            <a href="/feed">Ir para o feed</a>
            <a href="/">Sair</a>
        `);
    } else {
        res.status(401).send('Usuário ou senha inválidos');
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const { username, password } = req.body;

    // Exemplo de lógica adicional (se necessário)
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/feed', (req, res) => {
    res.render('feed');
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Processar os dados de registro (salvar no banco de dados, validações, etc.)
    console.log(`Usuário registrado: ${username}, Email: ${email}`);

    // Redirecionar para a home
    res.redirect('/home');
});

// Configurar eventos do Socket.IO
io.on('connection', (socket) => {
    console.log('Usuário conectado');
    // Receber mensagens do cliente
    socket.on('chat message', (msg) => {
        console.log(`Mensagem recebida: ${msg}`);
        io.emit('chat message', msg); // Enviar para todos os usuários
    });
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});



(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com PostgreSQL foi estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();
