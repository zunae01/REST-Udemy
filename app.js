const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();


app.use(bodyParser.json()); //parses json data from incoming requests instead of form data

// this middleware runs on every request and sets the following essential headers to avoid CORS Erros (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //the wildcard stands for the domain which should be allowed to access the API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE') //define allowed operations
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') //this allows to set the content type in client side javascript -> necessary because content-type needs to be set to json, in order to properly communicate with the API
    next();
});

app.use('/feed', feedRoutes);



app.listen(8080);