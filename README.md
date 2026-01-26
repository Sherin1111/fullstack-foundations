# Course-Based learning 

This repository contains course-based assignments for learning JavaScript, SQL, and APIs.

## JavaScript

### Overview
This assignment focused on building a **creative web app** using JavaScript, HTML, and CSS. The main goal was to demonstrate knowledge of JavaScript constructs, DOM manipulation, and event handling while applying best coding practices.

### Key learning outcomes:
- Handling user input and dynamically updating the web page
- Using arrays, loops, boolean logic, and functions
- Applying object methods and DOM events
- Understanding array methods (unshift(), shift(), split())
- Using Git and GitHub for version control

### Project:
A fun interactive web app where users select their preferred perfume notes (top, middle, base) and get a recommendation from a list of perfumes. The page updates dynamically based on user input, and visual cues like background color changes are applied.

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

### Key learning outcomes:
- Creating normalized relational databases with multiple tables
- Using primary and foreign keys to link tables effectively
- Writing queries to insert, retrieve, update, and delete data
- Using aggregate functions, joins, built-in functions, and stored procedures
- Implementing real-life scenarios for data analysis and reporting

### Project
A database for a sneaker store selling popular footwear brands like Nike, Adidas, Reebok, Vans, and Puma. The database includes tables for **footwear**, **customers**, **sales**, and **sales items**, allowing the store to track stock, customer purchases, and sales trends.

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
Projects:
- Project 1: Description
Skills learned: Fetching data from APIs, JSON parsing, REST concepts, etc.
