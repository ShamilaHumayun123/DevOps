const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.listen(3000,'0.0.0.0', () => console.log('Listening on port 3000'));
