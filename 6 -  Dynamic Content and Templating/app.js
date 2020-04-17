const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const expressHbs = require('express-handlebars')
const app = express();


//Set a global configuration value
app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout'}));
app.set('view engine', 'handlebars'); // Telling express which templating engine I'm using
app.set('views', 'views');
// My Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//General request middlewares
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public'))); //Style Import

// Route handling middlewares
app.use('/admin',adminData.routes); //All admin routes now start with /admin
app.use(shopRoutes);


//Catchall 404 page not found error
app.use((req,res,next) => { 
    //Can chain a bunch of different res. methods, send just has to be the last
    res.status(404).render('404', { docTitle : "404 - Page Not Found"})
});

app.listen(3000);
