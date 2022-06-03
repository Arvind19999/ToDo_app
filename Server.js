const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const cors  = require("cors");
const routes = require("./routes/ToDoRoutes");

const app  = express();
app.use(express.json());
app.use(cors());

app.use(routes);

DB_URL = process.env.MONGODB_URL;
DB_PORT = process.env.PORT

//Connecting to Database
mongoose.connect(DB_URL)
.then(()=>console.log("Successfully connected to Database"))
.catch((err)=>console.error(err));

//ToDo Web app listing port
app.listen(5000,()=>{
    console.log("App is listing to port ",DB_PORT);
});