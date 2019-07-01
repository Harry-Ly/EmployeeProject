const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Employee = require('./models/employee');

const app = express();

// Connects to database, changed test to node-angular
mongoose.connect("mongodb+srv://user:apples1@mean-login-db-codjk.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection failed');
  });
app.use(bodyParser.json());

// Allows access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

// Stores employee information in database
app.post('/api/employee', (req, res, next) => {
  // const employee = req.body;
  const employee = new Employee({
    first: req.body.first,
    last: req.body.last,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    home: req.body.home,
    cell: req.body.cell,
    email: req.body.email
  });
  employee.save();
  // console.log(employee);
  res.status(201).json({
    message: 'Employee added'
  });
});

// Sends back user information form express to localhost:3000/api/employee
app.get('/api/employee', (req, res, next) => {
  Employee.find({}, null, { sort: { first: 1 }}).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully",
      employees: documents
    });
  });
});

module.exports = app;
