const express = require("express");
const bodyParser = require("body-parser");

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
    res.status(404).send('<h1> Page Not Found </h1><form action="/admin/add-product" method="GET"><button type="submit">Return to Add Product</button></form>');
});

app.listen(3000);
