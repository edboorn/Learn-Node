const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

const errorController = require('./controllers/error')
//Set a global configuration value
app.set('view engine', 'ejs'); // Telling express which templating engine I'm using
app.set('views', 'views');
// My Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//General request middlewares
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public'))); //Style Import

// Route handling middlewares
app.use('/admin',adminRoutes); //All admin routes now start with /admin
app.use(shopRoutes);


//Catchall 404 page not found error
app.use(errorController.get404);

app.listen(3000);
