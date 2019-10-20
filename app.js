'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.engine('pug', require('pug').__express);

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/', (req, res) => res.render('pages/home', {
    userId: 1,
    username: 'Fariz'
}));

app.get('/leaderboard/', (req, res) => res.render('pages/leaderboard', {
    userId: 1,
    username: 'Fariz',
}));

app.get('/play/', (req, res) => res.render('pages/play', {
    userId: 1,
    username: 'Fariz',
}));

app.get('/play/easy/', (req, res) => res.render('pages/cameraplay', {
    userId: 1,
    username: 'Fariz',
}));

app.get('/learn/', (req, res) => res.redirect('alphabet/'));
app.get('/learn/alphabet/', (req, res) => res.render('pages/learn', {
    userId: 1,
    username: 'Fariz',
}));
app.get('/learn/alphabet/:value/', (req, res) => res.render('pages/cameralearn', {
    userId: 1,
    username: 'Fariz',
    alphabet: req.params.value
}));

app.get('/thread/', (req, res) => res.render('pages/thread', {
    userId: 1,
    username: 'Fariz',
}));

app.listen(PORT);