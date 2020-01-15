const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://araujs:araujs@cluster0-jnneb.mongodb.net/week10?retryWrites=true&w=majority', {
    useCreateIndex: true,    
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333);