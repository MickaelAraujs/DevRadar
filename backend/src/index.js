const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();

const server = http.Server(app); //extraindo o servidor http do express

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://araujs:araujs@cluster0-jnneb.mongodb.net/week10?retryWrites=true&w=majority', {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.listen(3333);