const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
const userRoutes = require('./routesUser/userRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.use(routes);

const usuarioCorreto = 'usuario';
const senhaCorreta = 'senha123';



app.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === usuarioCorreto && password === senhaCorreta) {
        res.redirect('/home');
    } else {
        res.send('dados incorrentos. Tente novamente.');
    }
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


server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
