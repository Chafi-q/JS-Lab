const express = require('express');
const mongoose =require('mongoose');
const routes = require("./routes.js");

    const app = express();

    app.use(express.json())
    
    app.use("/api",routes)

    app.listen((3000),()=>{
        console.log('started on port 3000')
    })










