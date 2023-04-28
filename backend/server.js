const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
    'host': 'csce-315-db.engr.tamu.edu',
    'user': 'csce315331_team_62_master',
    'database': 'csce315331_team_62',
    'password': 'panda',
    'port': '5432'

});
app.get('/cunt', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM Inventory');
    res.json(data.rows);
    console.log(data)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
app.get('/queryInventory/:start/:end', async (req, res) => {
    try {
      const start = parseInt(req.params.start);
      const end = parseInt(req.params.end);
      var queryToUse;
      if((start === 0) && (end === 0)){
        queryToUse = 'SELECT * FROM inventory ORDER BY id';
      }
      else{
        queryToUse = 'SELECT * FROM inventory WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
      }
      console.log(queryToUse);
      const { rows } = await pool.query(queryToUse);
      res.json(rows);
      //console.log(rows);
    } catch (err) {

      console.error("Read query in inventory failed " +err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// console.log("cunt")
app.listen(3001, () => {
  console.log('Server listening on port 5000');
});