const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next(); // Allows the call to go to the next bit of middleware
});

app.use((req, res, next) => {
    console.log('In the middleware')
    res.send('<h1> Hello from express </h1>');
});

app.listen(3000);
