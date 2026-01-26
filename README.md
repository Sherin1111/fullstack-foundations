# Course-Based Learning Portfolio: Full-Stack Projects

This repository contains **foundation-level, course-based assignments** completed as part of a structured coding programme, focusing on building strong fundamentals across **JavaScript, SQL, and API development**. Each project applies theoretical concepts to practical, real-life scenarios while following best practices in code structure, documentation, and version control.

These assignments form the **building blocks for a larger end-to-end full-stack group project**, completed later in the programme. That final project integrates frontend, backend, and database functionality into a single production-style application.

🔒 The final group project repository currently exists as a private repository:

**Final Group Project (End-to-End Full-Stack)**  
Music Theory Learning App — link will be made public once available.


Through this foundation module, I gained hands-on experience in:
- **Front-end development** using JavaScript, HTML, and CSS
- **Relational database design and querying** with SQL and MySQL
- **Backend development and RESTful APIs** using Node.js and Express.js
- **Git and GitHub workflows**, including branching, pull requests, and documentation

The projects included in this repository are:
1. **JavaScript Web App** – interactive UI logic and DOM manipulation
2. **SQL Database Project** – normalized relational database with real-life use cases
3. **RESTful API** – backend service integrating Express.js and MySQL for CRUD operations

## JavaScript

### Overview
This assignment focused on building a **creative web app** using JavaScript, HTML, and CSS. The main goal was to demonstrate knowledge of JavaScript constructs, DOM manipulation, and event handling while applying best coding practices.

### Project:
A fun interactive web app where users select their preferred perfume notes (top, middle, base) and get a recommendation from a list of perfumes. The page updates dynamically based on user input, and visual cues like background color changes are applied.

### Key learning outcomes:
- Handling user input and dynamically updating the web page
- Using arrays, loops, boolean logic, and functions
- Applying object methods and DOM events
- Understanding array methods (unshift(), shift(), split())
- Using Git and GitHub for version control

### Feedback Highlights
- Used consistent formatting, comments, and meaningful variable names
- Added event listeners for user interactions
- Added emojis to represent perfume notes for better UX

### Code improvements applied:
- Added console.log() for debugging user input and results
- Moved the perfumes array outside of the function for better scope management

### UI / CSS highlights:
- Styled container with rounded borders, shadows, and color accents
- Simple responsive layout for input forms and recommendations
- Background color changes to enhance user interaction

## SQL

### Overview
This assignment focused on designing and implementing a creative relational database using MySQL. The goal was to demonstrate knowledge of database design, SQL commands, and data manipulation while applying best coding practices.

### Project
A database for a sneaker store selling popular footwear brands like Nike, Adidas, Reebok, Vans, and Puma. The database includes tables for **footwear**, **customers**, **sales**, and **sales items**, allowing the store to track stock, customer purchases, and sales trends.

### Key learning outcomes:
- Creating normalized relational databases with multiple tables
- Using primary and foreign keys to link tables effectively
- Writing queries to insert, retrieve, update, and delete data
- Using aggregate functions, joins, built-in functions, and stored procedures
- Implementing real-life scenarios for data analysis and reporting

### Database design highlights:

- **Tables**: footwear, customers, sales, sales_items

- **Primary/foreign keys**:

    - footwear.sneaker_id (PK)

    - customers.customer_id (PK)

    - sales.sales_id (PK), linked to customers.customer_id

    - sales_items.sales_item_id (PK), linked to sales.sales_id and footwear.sneaker_id

- **Data types**: INT, VARCHAR, DECIMAL, DATETIME

- **Constraints**: NOT NULL, UNIQUE, DEFAULT values

- **Populated data**: At least 8 rows per table, including mock data for customers, footwear, and sales

### Example code snippet:

```
-- Create footwear table
CREATE TABLE footwear (
    sneaker_id INT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    colour VARCHAR(50) NOT NULL,
    size INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0
);

-- Insert sample data
INSERT INTO footwear (sneaker_id, name, brand, colour, size, price, stock)
VALUES (3001, 'Nike Air Rift', 'Nike', 'Black', 4, 120.00, 4),
       (3002, 'Nike Air Rift', 'Nike', 'Black', 5, 120.00, 5);
```

### Queries & Data Manipulation

**Cleaning and correcting data**:
```
-- Trim spaces from customer last names
SELECT TRIM(last_name) AS updated_last_name FROM customers;

-- Delete incorrect customer
DELETE FROM customers WHERE first_name = 'Jenn';
```
**Data retrieval and sorting**:
```
-- Footwear priced over £100, sorted by price descending
SELECT name, brand, colour, price
FROM footwear
WHERE price >= 100
ORDER BY price DESC;

-- Top 3 customers by total purchase
SELECT c.first_name, s.quantity, s.total_price
FROM customers c
INNER JOIN sales s ON c.customer_id = s.customer_id
ORDER BY s.total_price DESC
LIMIT 3;
```
**Using joins and built-in functions**:
```
-- List brands in sales_items table in uppercase
SELECT UPPER(f.brand) AS brand_name, si.sales_id, si.sneaker_id
FROM footwear f
RIGHT JOIN sales_items si ON f.sneaker_id = si.sneaker_id
ORDER BY brand_name ASC;
```

### Stored Procedures
**Trending sneakers daily**:
```
DELIMITER //
CREATE PROCEDURE trending_sneakers_daily()
BEGIN
  SELECT si.sneaker_id, f.brand, f.name, f.size, COUNT(f.name) AS total_sold
  FROM sales_items si
  JOIN sales s ON si.sales_id = s.sales_id
  JOIN footwear f ON si.sneaker_id = f.sneaker_id
  GROUP BY si.sneaker_id
  ORDER BY total_sold DESC;
END //
DELIMITER ;

CALL trending_sneakers_daily();
```
**Update stock daily**:
```
DELIMITER //
CREATE PROCEDURE update_stock_daily()
BEGIN
  SELECT si.sneaker_id, f.brand, f.name, f.size, f.stock,
         SUM(f.stock) - SUM(s.quantity) AS updated_stock
  FROM footwear f
  JOIN sales_items si ON si.sneaker_id = f.sneaker_id
  JOIN sales s ON si.sales_id = s.sales_id
  GROUP BY si.sneaker_id, f.brand, f.name, f.size, f.stock;
END //
DELIMITER ;

CALL update_stock_daily();
```

### Feedback Highlights
- Code is neat and easy to read with comments explaining purpose
- Creative scenario of a sneaker store with real-life usage
- Applied all required SQL constructs: joins, aggregates, built-in functions, stored procedures, constraints
- Proper naming conventions and consistent formatting

## APIs

### Overview
Developed a **RESTful** API to manage customer orders for a blind box store. The API tracks the full order lifecycle—from order creation to updates, deletion, and retrieval—integrating with a MySQL database for data storage and management.

### Project:
The API supports Blind Box figurine orders, where each order includes customer details, order items, total price, shipping date, and order status. The API simulates real-life scenarios such as creating a new order, updating order status, deleting orders, and tracking stock levels.

### Key Learnings:
- Structuring an **Express.js** server and implementing RESTful endpoints
- Connecting **Node.js** with **MySQL** and executing SQL queries in a backend environment
- Handling HTTP status codes, error handling, and input validation
- Using environment variables for secure credentials and configuration
- Best practices for clean, readable code and project documentation

### Technologies Used:
- Node.js, Express.js
- MySQL, dotenv
- Postman for testing API endpoints

### Highlights:
- Implemented **CRUD** operations for customer orders, including creating, reading, updating, and deleting orders
- Designed endpoints with proper status codes and messages for success and error scenarios
- Used SQL queries with placeholders to prevent injection attacks
- Added an additional endpoint to update stock and track orders using stored procedures
- Documented the API and provided example workflows for real-life usage

### Example Code Snippet:
```
// POST endpoint to create a new order
app.post("/order", (req, res) => {
  const { blind_box_name, customer_name, email, total_price } = req.body;
  const sql = "INSERT INTO customer_order(blind_box_name, customer_name, email, total_price) VALUES (?, ?, ?, ?)";
  pool.query(sql, [blind_box_name, customer_name, email, total_price], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(201).json({ order_id: result.insertId, message: "Order received successfully" });
  });
});
```

### Feedback Highlights:
- Endpoints implement proper RESTful principles with status codes and messages
- Code is neat, readable, and well-documented
- Real-life scenario for a blind box store with order lifecycle and stock tracking
- Environment variables used to secure sensitive data