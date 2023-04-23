const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const uuid = require('uuid').v4;
const path = require('path');
// Set up server
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../../public')));

//app.options('*', cors());

console.log("db document running");

// Connect to PostgreSQL database
const pool = new Pool({
  host: 'csce-315-db.engr.tamu.edu',
  user: 'csce315331_team_42_master',
  database: 'csce315331_team_62',
  password: "panda",
});
pool.connect((err, client, done) => {
  if (err) {
       console.error("Database connection failed with error " + err.stack);
       return;
     }
     console.log("Connection to database successful");
});

// Define an endpoint that returns data from the 'users' table
app.get('/inventoryRequest/:start/:end', async (req, res) => {
    try {
      const start = parseInt(req.params.start);
      const end = parseInt(req.params.end);
      //console.log("attempting fetch, start: ", start, ", end: ", end);
      const userId = req.params.id;
  
      var queryToUse;
      if((start === 0) && (end === 0)){
        queryToUse = 'SELECT * FROM Inventory ORDER BY MENU_ITEM_ID';
      }
      else{
        queryToUse = 'SELECT * FROM Menu WHERE MENU_ITEM_ID >= ' + start + ' AND MENU_ITEM_ID <= ' + end + ' ORDER BY MENU_ITEM_ID';
      }
      console.log(queryToUse);
      const { rows } = await pool.query(queryToUse);
      res.json(rows);
      //console.log(rows);
    } catch (err) {
      //console.log("error!");
      console.error("Read failed with error in inventoryRequest: " +err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });