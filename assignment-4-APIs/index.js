const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());

//create a sql connection pool
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

// First endpoiont
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
  //Query with actual values
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
      // handle errors
      if (err) {
        console.error("Error your order was not recived:", err.message);
        return res.status(500).json({ error: "database error" });
      }
      // Success response
      res.status(201).json({
        order_id: result.insertId,
        message: `${customer_name} your order has been recived successfully`,
      });
    }
  );
});

// Second endpoint
app.get("/order", (req, res) => {
  //create sql query to select all orders
  const sql = "SELECT * FROM customer_order";
  //excute the query to grab the information from db
  pool.query(sql, (err, results) => {
    //handle the error
    if (err) {
      console.error("Error fetching order:", err.message);

      return res.status(500).json({ error: "Database error" });
    }
    // sends back results
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
