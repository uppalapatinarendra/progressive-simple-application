const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();

const datastore = new nedb({
    filename: "mycoffeeapp.db", autoload: true
});

const restAPI = rest();
restAPI.addDatastore('coffee', datastore);

app.use(cors());

app.use('/', restAPI);

app.listen(3000, '192.168.43.243', function() {
    console.log('Listening to port:  ' + 3000);
});