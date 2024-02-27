const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// import express from 'express';
// import cors from 'cors'
// import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kamalSan@0306",
  database: "covid",
});

// db.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('DB connected')
// })





//app.get("/", (req, res) => {
//  res.json("hello");
//});

app.get("/vaccine", (req, res) => {
  const q = "SELECT * FROM slot";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    return res.json(data);
  });
});

app.post("/vaccine", (req, res) => {
  const q = "INSERT INTO slot (center, address, slots, date) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.center,
    req.body.address,
    req.body.slots,
    req.body.date,
  ]; 

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
    } //return res.send(err);
    console.log("created");

    
  });
  res.status(200).send({message:"created"});
});

app.delete("/vaccine/:id", (req, res) => {
  const vaccineId = req.params.id;
  const q = " DELETE FROM slot WHERE id = ? ";

  db.query(q, [vaccineId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/vaccine/:id", (req, res) => {
  const vaccineId = req.params.id;
  const q = "UPDATE slot SET center= ?, address= ?, slots= ?, date = ? WHERE id = ?";

  const values = [
    req.body.center,
    req.body.address,
    req.body.slots,
    req.body.date,
  ];

  db.query(q, [...values,vaccineId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to check if email and password exist in the databas
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.query(query, [email, password], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query: ', error);
        res.json("fail");
        return;
      }

      if (results.length > 0) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    });
  } catch (e) {
    console.error('Error: ', e);
    res.json("fail");
  }
});

// Route to handle signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to check if email exists in the database
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], (error, results) => {
      if (error) {
        console.error('Error executing MySQL query: ', error);
        res.json("fail");
        return;
      }

      if (results.length > 0) {
        res.json("exist");
      } else {
        // Insert new user into the database
        const insertQuery = `INSERT INTO users (email, password) VALUES (?, ?)`;
        db.query(insertQuery, [email, password], (insertError, insertResults) => {
          if (insertError) {
            console.error('Error inserting new user: ', insertError);
            res.json("fail");
            return;
          }
          res.json("notexist");
        });
      }
    });
  } catch (e) {
    console.error('Error: ', e);
    res.json("fail");
  }
});

db.connect((err) => {
  if (err) {
    console.log(err.message); 
    return;   
  }
  console.log('DB connected')
})

app.listen(8800, () => {
  console.log("Connected to backend.");
})