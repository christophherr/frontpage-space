/* eslint import/unambiguous: 0 */
const express = require('express');

const path = require('path');

const app = express();

app.set('port', 3100);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(express.static('public'));

app.listen(3100, function() {
    console.log('listening on *:3100');
});
