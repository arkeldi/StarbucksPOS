const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

app.post('/add-item', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO inventory (id, item_name, item_type, item_quantity, item_unit, item_price, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.type}', '${itemInfo.quantity}', '${itemInfo.unit}', '${itemInfo.price}', '${itemInfo.date}');`;
    // console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-product', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO products (id, product_name, product_type, product_price, product_description, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.type}', '${itemInfo.price}', '${itemInfo.description}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-employees', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO employees (id, employee_name, employee_position, employee_phone, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.position}', '${itemInfo.phone}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/add-customers', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO customers (id, customer_name, customer_phone, date_of_last_update)
    VALUES ('${itemInfo.id}', '${itemInfo.name}', '${itemInfo.phone}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/add-recipes', async (req, res) => {
  try{
    const itemInfo = req.body; // assuming the JSON payload contains all necessary item info
    const queryToUse = `INSERT INTO recipes (product_id, inventory_id, inventory_item, quantity, unit, date_of_last_update)
    VALUES ('${itemInfo.p_id}', '${itemInfo.i_id}', '${itemInfo.i_item}', '${itemInfo.quantity}', '${itemInfo.unit}', '${itemInfo.date}');`;
    console.log(queryToUse);
    const result = await pool.query(queryToUse);  
    res.json({ message: 'Item added successfully' }); // send a response back to the client
  }
  catch(err){
    console.error('Error adding item to database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/salesReport/:start/:end', async (req, res) => {
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

app.listen(3001, () => {
  console.log('Server listening on port 5000');
});