const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

app.use(cors);
app.use(allowCrossDomain);
app.listen(port, console.log('Servering  Server '));