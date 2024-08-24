const PORT = 3000;
const DOCROOT = './../dist/';

const http = require('http');
const path = require('path');
const express = require('express');
const sockets = require('./sockets')

// Создаем сервер
const app = express();
const server = http.createServer(app);

// Настроить отдачу игры при запросе к серверу
const documentRoot = path.join(__dirname, DOCROOT);
const staticContent = express.static(documentRoot);
app.use(staticContent);

// Инициализируем сокеты
sockets.init(server);


// Запускаем сервер
server.listen(PORT, () => {
    console.log('Server is runing on port:', PORT)
})
