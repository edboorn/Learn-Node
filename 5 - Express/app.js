const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

// My Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//General request middlewares
app.use(bodyParser.urlencoded({extended : true}));

// Route handling middlewares
app.use('/admin',adminRoutes); //All admin routes now start with /admin
app.use(shopRoutes);


//Catchall 404 page not found error
app.use((req,res,next) => { 
    //Can chain a bunch of different res. methods, send just has to be the last
    res.status(404).sendFile(path.join(__dirname ,'views', 'error.html'));
});

app.listen(3000);
