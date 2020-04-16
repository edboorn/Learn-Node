const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// My Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//General request middlewares
app.use(bodyParser.urlencoded({extended : true}));

// Route handling middlewares
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
