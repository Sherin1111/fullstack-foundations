-- I am creating a database for a sneaker store that sells footwear from popular brands like Nike and Adidas. 
-- I chose this theme because it has real life usage, and I am familiar with this environment.

CREATE DATABASE sneakerStore;
USE sneakerStore;

-- The first table stores information about the footwear (Table 1).
CREATE TABLE footwear (
    sneaker_id INT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    colour VARCHAR(50) NOT NULL,
    size INT NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock INT DEFAULT 0
);

-- The second table stores information about customers (Table 2).
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(15) NULL
);


-- The third table stores information about sales (Table 3).
CREATE TABLE sales (
    sales_id INT PRIMARY KEY,
    customer_id INT,
    quantity INT NOT NULL,
    total_price DECIMAL(10 , 2 ) NOT NULL,
    sales_date DATETIME DEFAULT NOW (),
    FOREIGN KEY (customer_id)
        REFERENCES customers (customer_id)
);


-- The fourth table records the individual footwear items sold (Table 4).
CREATE TABLE sales_items (
    sales_item_id INT PRIMARY KEY,
    sales_id INT NOT NULL,
    sneaker_id INT NOT NULL,
    FOREIGN KEY (sales_id)
        REFERENCES sales (sales_id),
    FOREIGN KEY (sneaker_id)
        REFERENCES footwear (sneaker_id)
);


-- Inserted sample data into the footwear table (Table 1).
INSERT INTO footwear
(sneaker_id, name, brand, colour, size, price, stock)
VALUES
(3001, 'Nike Air Rift', 'Nike', 'Black', 4, 120.00, 4),
(3002, 'Nike Air Rift', 'Nike', 'Black', 5, 120.00, 5),
(3003, 'Nike Air Rift', 'Nike', 'Black', 6, 120.00, 5),
(3004, 'Nike Air Max 95', 'Nike', 'White', 3, 175.00, 6),
(3005, 'Nike Air Max 95', 'Nike', 'White', 4, 175.00, 6),
(3006, 'Nike Air Max 95', 'Nike', 'White', 5, 175.00, 3),
(3007, 'Nike Air Force 1 Low', 'Nike', 'Blue', 3, 110.00, 3),
(3008, 'Nike Air Force 1 Low', 'Nike', 'Blue', 4, 110.00, 2),
(3009, 'Nike Air Force 1 Low', 'Nike', 'Blue', 5, 110.00, 3),
(3010, 'Adidas Originals Samba OG Pony Hair Leopard', 'Adidas', 'Brown', 3, 100.00, 3),
(3011, 'Adidas Originals Samba OG Pony Hair Leopard', 'Adidas', 'Brown', 5,	100.00,	4),
(3012, 'Adidas Originals Samba OG Pony Hair Leopard', 'Adidas', 'Brown', 6,	100.00,	2),
(3013, 'Adidas Originals Handball Spezial',	'Adidas', 'Pink', 3, 90.00, 5),
(3014, 'Adidas Originals Handball Spezial',	'Adidas', 'Pink', 4, 90.00,	6),
(3015, 'Adidas Originals Handball Spezial',	'Adidas', 'Pink', 5, 90.00,	4),
(3016, 'Adidas Originals Gazelle Indoor', 'Adidas', 'Red', 3, 95.00, 7),
(3017, 'Adidas Originals Gazelle Indoor', 'Adidas', 'Red', 4, 95.00,	6),
(3018, 'Adidas Originals Gazelle Indoor', 'Adidas', 'Red', 5, 95.00,	6),
(3019, 'Vans Premium Old Skool 36', 'Vans', 'Black', 3, 90.00, 4),
(3020, 'Vans Premium Old Skool 36', 'Vans', 'Black', 4, 90.00, 3),
(3021, 'Vans Premium Old Skool 36', 'Vans', 'Black',5, 90.00, 3),
(3022, 'Vans Sport 73', 'Vans', 'Purple', 4, 85.00, 6),
(3023, 'Vans Sport 73', 'Vans', 'Purple', 5, 85.00,	4),
(3024, 'Vans Sport 73', 'Vans', 'Purple', 6, 85.00,	3),
(3025, 'Vans Authentic 44 LX', 'Vans', 'Black', 4, 75.00, 5),
(3026, 'Vans Authentic 44 LX', 'Vans', 'Black', 5, 75.00, 4),
(3027, 'Vans Authentic 44 LX', 'Vans', 'Black', 7, 75.00, 2),
(3028, 'Reebok Club C Vintage', 'Reebok', 'white', 4, 75.00, 4),
(3029, 'Reebok Club C Vintage', 'Reebok', 'white', 5, 75.00, 4),
(3030, 'Reebok Club C Vintage', 'Reebok', 'white', 6, 75.00, 2),
(3031, 'Reebok Classic Leather', 'Reebok', 'Black', 3, 80.00, 5),
(3032, 'Reebok Classic Leather', 'Reebok', 'Black', 4, 80.00, 4),
(3033, 'Reebok Classic Leather', 'Reebok', 'Black',	6, 80.00, 3),
(3034, 'Reebok Instapump Fury OG', 'Reebok', 'Yellow', 3, 75.00, 2),
(3035, 'Reebok Instapump Fury OG', 'Reebok', 'Yellow', 4, 75.00, 2),
(3036, 'Reebok Instapump Fury OG', 'Reebok', 'Yellow', 5, 75.00, 4),
(3037, 'PUMA Mostro Fey Stud', 'PUMA', 'Black', 4, 90.00, 5),
(3038, 'PUMA Mostro Fey Stud', 'PUMA', 'Black', 5, 90.00, 6),
(3039, 'PUMA Mostro Fey Stud', 'PUMA', 'Black', 6, 90.00, 4),
(3040, 'PUMA Speedcat', 'PUMA', 'Green', 3, 90.00, 3),
(3041, 'PUMA Speedcat', 'PUMA', 'Green', 4, 90.00, 3),
(3042, 'PUMA Speedcat', 'PUMA', 'Green', 5, 90.00, 4),
(3043, 'PUMA Mostro OG', 'PUMA', 'Blue', 3, 115.00, 3),
(3044, 'PUMA Mostro OG', 'PUMA', 'Blue', 5, 115.00, 4),
(3045, 'PUMA Mostro OG', 'PUMA', 'Blue', 6, 115.00, 5);


-- Inserted sample data into the customers table (Table 2).
INSERT INTO customers 
(customer_id, first_name, last_name, email, phone_number)
VALUES
(101, 'Sammy', 'Brown', 'SammyBrown@email.com', '07864363783'),
(102, 'Ashley', 'Miller', 'AshleyMiller@email.com', '07982726242'),
(103, 'Anna', 'Martin',	'AnnaMartin@email.com', NULL),
(104, 'Buffy', 'Summers', 'BuffySummers@email.com',	'07503772521'),
(105, 'Elise', 'Jones',	'EliseJones@email.com',	'07702233647'),
(106, 'Bella', 'Hadid',	'BellaHadid@email.com',	'07299188113'),
(107, 'Maria', 'Lopez',	'MariaLopez@email.com', NULL),
(108, 'James', 'Dean', 'JamesDean@email.com', '07833464521'),
(109, 'Irene', 'Williams', 'IreneWilliams@email.com', '07065408643'),
(110, 'Sam', ' Evans', 'SamEvans@email.com', '07636641230'),
(111, 'Kate', 'Hughes', 'KateHughes@email.com', NULL),
(112, 'Jas', 'Ali', 'JasAli@email.com', '07434567120'),
(113, 'Grace', 'Jones', 'GraceJones@email.com', NULL),
(114, 'Willow', 'Smith', 'WillowSmith@email.com', NULL),
(115, 'Emmy', 'White', 'EmmyWhite@email.com', '07546875401'),
(116, 'Aaron', ' Moore', 'AaronMoore@email.com', '07230084513'),
(117, 'Phoebe', 'Jackson', 'PhoebeJackson@email.com', '07544312309'),
(118, 'Kris', ' Lee', 'KrisLee@email.com', NULL),
(119, 'Dara', ' Cook', 'DaraCook@email.com', NULL),
(120, 'Ruby', ' Devi', 'RubyDevi@email.com', NULL),
(121, 'Jenn', 'Campbell', 'no@email', '007');


-- Inserted sample data into the sales table (Table 3).
INSERT INTO sales
(sales_id, customer_id, quantity, total_price, sales_date)
VALUES
(200, 101, 1, 100.00, TIMESTAMP(NOW())),
(201, 102, 2, 170.00, TIMESTAMP(NOW())),
(202, 103, 1, 90.00, TIMESTAMP(NOW())),
(203, 104, 1, 80.00, TIMESTAMP(NOW())),
(204, 105, 2, 205.00, TIMESTAMP(NOW())),
(205, 106, 3, 370.00, TIMESTAMP(NOW())),
(206, 107, 1, 75.00, TIMESTAMP(NOW())),
(207, 108, 2, 165.00, TIMESTAMP(NOW())),
(208, 109, 2, 165.00, TIMESTAMP(NOW())),
(209, 110, 3, 365.00, TIMESTAMP(NOW())),
(210, 111, 1, 90.00, TIMESTAMP(NOW())),
(211, 112, 2, 185.00, TIMESTAMP(NOW())),
(212, 113, 2, 180.00, TIMESTAMP(NOW())),
(213, 114, 1, 90.00, TIMESTAMP(NOW())),
(214, 115, 1, 175.00, TIMESTAMP(NOW())),
(215, 116, 3, 315.00, TIMESTAMP(NOW())),
(216, 117, 2, 170.00, TIMESTAMP(NOW())),
(217, 118, 1, 75.00, TIMESTAMP(NOW())),
(218, 119, 1, 75.00, TIMESTAMP(NOW())),
(219, 120, 2, 275.00, TIMESTAMP(NOW()));


-- Inserted sample data into the sales_items table (Table 4).
INSERT INTO sales_items
(sales_item_id, sales_id, sneaker_id)
VALUES
(1, 200, 3011),
(2, 201, 3019),
(3, 201, 3031),
(4, 202, 3038),
(5, 203, 3033),
(6, 204, 3003),
(7, 204, 3024),
(8, 205, 3006),
(9, 205, 3011),
(10, 205, 3018),
(11, 206, 3030),
(12, 207, 3041), 
(13, 207, 3034),
(14, 208, 3021),
(15, 208, 3026),
(16, 209, 3004),  
(17, 209, 3010), 
(18, 209, 3013),
(19, 210, 3039),
(20, 211, 3008), 
(21, 211, 3025),
(22, 212, 3018),
(23, 212, 3023),
(24, 213, 3021),
(25, 214, 3006),
(26, 215, 3045),
(27, 215, 3033),
(28, 215, 3003),
(29, 216, 3031),
(30, 216, 3019),
(31, 217, 3027),
(32, 218, 3036),
(33, 219, 3011),
(34, 219, 3006);



-- I trimmed the last_name column because it had spaces at the beginning. 
-- I used the in-built function TRIM() to remove them.
SELECT 
    TRIM(last_name) AS updated_last_name
FROM
    customers
ORDER BY updated_last_name ASC;


-- I deleted the customer "Jenn" because the data entered was incorrect.
DELETE FROM customers 
WHERE
    first_name = 'Jenn';


-- I wanted to see which footwear costs £100 or more, with the most expensive listed first. 
-- I used ORDER BY DESC to sort the results.
SELECT DISTINCT
    name, brand, colour, price
FROM
    footwear
WHERE
    price >= 100.00
ORDER BY price DESC;


-- I wanted to see which brands appeared in the sales_items table. 
-- I used a RIGHT JOIN and the in-built function UPPER() to make the brand names stand out.
SELECT 
    UPPER(f.brand) AS brand_name, si.sales_id, si.sneaker_id
FROM
    footwear AS f
        RIGHT JOIN
    sales_items AS si ON f.sneaker_id = si.sneaker_id
ORDER BY brand_name ASC;


-- I wanted to find the top three customers who spent the most on footwear. 
-- I did this using an INNER JOIN and sorting by total_price.
SELECT 
    c.first_name, s.quantity, s.total_price
FROM
    customers AS c
        INNER JOIN
    sales AS s ON c.customer_id = s.customer_id
ORDER BY s.total_price DESC
LIMIT 3;


-- I wanted to see how many of each pair of footwear was sold to check what was trending. 
-- I used the aggregate function COUNT() inside a stored procedure so it can be run daily.
DELIMITER //
CREATE PROCEDURE trending_sneakers_daily()
BEGIN
SELECT 
    si.sneaker_id,
    f.brand,
    f.name,
    f.size,
    COUNT(f.name) AS total_sold
FROM
    sales_items AS si
        JOIN
    sales AS s
        JOIN
    footwear AS f ON si.sales_id = s.sales_id
        AND si.sneaker_id = f.sneaker_id
GROUP BY si.sneaker_id
ORDER BY total_sold DESC;
END //
DELIMITER ;

CALL trending_sneakers_daily();



-- I wanted to update the stock quantity daily. 
-- I used the aggregate function SUM() inside a stored procedure to calculate the updated stock.
DELIMITER //
CREATE PROCEDURE update_stock_daily()
BEGIN
SELECT 
    si.sneaker_id,
    f.brand,
    f.name,
    f.size,
    f.stock,
    s.quantity AS quantity_sold,
    SUM(f.stock) - SUM(s.quantity) AS updated_stock
FROM
    footwear AS f
        JOIN
    sales_items AS si
        JOIN
    sales AS s ON f.sneaker_id = si.sneaker_id
        AND si.sales_id = s.sales_id
GROUP BY si.sneaker_id , f.brand , f.name , f.size , f.stock , s.quantity
ORDER BY f.brand ASC;
END //
DELIMITER ;

CALL update_stock_daily();













