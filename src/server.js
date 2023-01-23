// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/', function (req, res) {
    res.send('I am a POST request');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
app.use(express.json()); // Traitement des requettes json
app.disable('x-powered-by'); // retirer la visibilité de la v d'express dans header
