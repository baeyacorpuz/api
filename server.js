const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000
const app = express()

// Welcome message
console.log('May Node be with you')
app.get('/', (req, res) => res.send('Welcome to Express'))

const apiRoutes = require('./route/route')

// Connect to mongoose
const dbPath = 'mongodb://localhost/api-project';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log('Connected to db');
}, error => {
  console.log(error, 'error');
})

// Configure body-parser to handle the post requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api', apiRoutes)

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

// Launch app to the specified port
app.listen(port, function () {
  console.log("Running api on port:  " + port);
})