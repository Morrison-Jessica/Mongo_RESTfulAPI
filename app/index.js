const express = require ("express");
const app = express();
require ('dotenv').config();
const routeHandler = require('./routes/routes.api');


app.get ( "/", (req, res ) => {
    res.status(200).json({ message: "API is running", success: true});
});

app.use("/api/v1", routeHandler );

module.exports = app; 