const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());

// Created a sql connection pool
const pool = mysql.createPool({
  host: "127.0.0.1", // MySQL server host
  user: "root", // MySQL user
  password: process.env.password, // MySQL password
  database: "blindBoxWeb", // MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  res.send("Welcome to the Blind Box Store");
});

// First endpoiont, submitting new orders
app.post("/create-order", (req, res) => {
  const {
    blind_box_name,
    customer_name,
    email,
    address,
    total_price,
    ship_date,
    order_status,
  } = req.body;
  // sql query with placeholders
  const sql =
    "INSERT INTO customer_order(blind_box_name, customer_name, email, address, total_price, ship_date, order_status) VALUES (?, ?, ?, ?, ?, ?, ?) ";
  // Query with actual values
  pool.query(
    sql,
    [
      blind_box_name,
      customer_name,
      email,
      address,
      total_price,
      ship_date,
      order_status,
    ],
    (err, result) => {
      // Handling the error by returning (500)
      if (err) {
        console.error("Error your order was not received:", err.message);
        return res.status(500).json({ error: "database error" });
      }
      // If the order is received successfully it will return (201)
      res.status(201).json({
        order_id: result.insertId,
        message: `${customer_name} your order has been received successfully`,
      });
    }
  );
});

// Second endpoint, retrieving all orders made
app.get("/order", (req, res) => {
  //create sql query to select all orders
  const sql = "SELECT * FROM customer_order";
  //excute the query to grab the information from db
  pool.query(sql, (err, results) => {
    //Handling the error by returning (500)
    if (err) {
      console.error("Error fetching order:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    // If data retrieved successfully it will return (200)
    res.status(200).json(results);
  });
});

// Third endpoint, updating orders
app.put("/update-order/:order_id", (req, res) => {
  // Retrieving order_id from the params(url)
  const orderId = req.params.order_id;
  //The data I want to update
  const {
    blind_box_name,
    customer_name,
    email,
    address,
    total_price,
    ship_date,
    order_status,
    order_id,
  } = req.body;

  // sql query to updated the values in the customer_order table
  const sql =
    "UPDATE customer_order SET blind_box_name = ?, customer_name = ?, email = ?, address = ?, total_price = ?, ship_date = ?, order_status = ?  WHERE order_id = ?";
  pool.query(
    sql,
    [
      blind_box_name,
      customer_name,
      email,
      address,
      total_price,
      ship_date,
      order_status,
      order_id,
    ],
    //Handling the error by returning 500
    (err, result) => {
      if (err) {
        console.error("Error updating order:", err.message);
        return res.status(500).json({ error: "Database error" });
      }
      // If data is not updated it will return (404)
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Order not found" });
      }
      //If updated successfully it will return (200)
      res.status(200).json({
        message: `The order number ${order_id} has been updated successfully`,
      });
    }
  );
});

// Fourth endpoint, deletiing an order
app.delete("/delete-order/:order_id", (req, res) => {
  // Retrieving order_id from the params(url)
  const orderId = req.params.order_id;
  // sql query to delete the order in the customer_order table using the order_id
  const sql = "DELETE FROM customer_order WHERE order_id = ?";
  pool.query(sql, [orderId], (err, result) => {
    //Handling the error by returning 500
    if (err) {
      console.error("Error deleting order:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    // If the order is not deleted it will return (404)
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    // If deleted successfully it will return (200)
    res.status(200).json({
      message: `This order has been deleted successfully`,
    });
  });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
