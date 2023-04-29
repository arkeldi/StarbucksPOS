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
        queryToUse = 'SELECT * FROM inventory ORDER BY id limit 10';
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
app.get('/queryProducts/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM products ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM products WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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
app.get('/queryCustomizations/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM customizations ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM customizations WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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

app.get('/querySales/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM sales ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM sales WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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

app.get('/queryOrders/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM orders ORDER BY sale_id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM orders WHERE id >= ' + start + ' AND sale_id <= ' + end + ' ORDER BY sale_id';
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

app.get('/queryEmployees/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM employees ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM employees  WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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

app.get('/queryCustomers/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM customers ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM customers WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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

app.get('/queryRecipes/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM recipes ORDER BY product_id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM recipes WHERE product_id >= ' + start + ' AND product_id <= ' + end + ' ORDER BY product_id';
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

app.get('/querySizes/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM sizes ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM sizes WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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

app.get('/queryReports/:start/:end', async (req, res) => {
  try {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    var queryToUse;
    if((start === 0) && (end === 0)){
      queryToUse = 'SELECT * FROM reports ORDER BY id limit 10';
    }
    else{
      queryToUse = 'SELECT * FROM reports WHERE id >= ' + start + ' AND id <= ' + end + ' ORDER BY id';
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
//not done yet
app.post('/add-item', async (req, res) => {
  try {
    const newItem = req.body; // extract item data from request body

    // Use SQL to insert the new item into the database
    const query = 'INSERT INTO items (name, description, price) VALUES ($1, $2, $3)';
    const values = [newItem.name, newItem.description, newItem.price];
    await pool.query(query, values);

    res.status(200).json({ message: 'Item added successfully' });
  } catch (err) {
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.listen(3001, () => {
  console.log('Server listening on port 5000');
});