// ==== Packages and Imports ==== //
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql2');
require("dotenv").config();
const cors = require('cors');
const dbPool = require('./config/database.js')



// ===== Enable Express ==== //
const app = express();

// ====== MIDDLEWARES ====== //
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

//Cors configuration
const corsOptions = {
    origin: frontendUrl,
    methods: "GET, PUT, POST, DELETE",
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(morgan('dev'));

// ===== Database Config ====//
// mySql pool setup in  config file imported above const dbPool
// pool test
app.get('/pool-test',async(req, res) => {
  let connection;
  try{
    connection = await dbPool.getConnection();
    console.log("connection obtained")
  }  
  catch (error){
    console.error('Error in connection test:', error);
  } 
  finally {
    if(connection) connection.release();
    console.log("connection released");
  }
});


//========== ROUTES =============//
const getDisciplinesRouter = require('./routes/getDisciplines')(dbPool);
app.use("/api/sql/disciplines", getDisciplinesRouter);


// ======== PORT =============//
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
    console.log(`CORS origin set to: ${process.env.FRONTEND_URL}`);
})
.on('error', (error) => {
    console.log("Server Error!!! 🦧🦧", error);
});
