'use strict'


const DatabaseControlList = require('./database_examples/database_control')
const express = require('express')
const app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

DatabaseControlList(app)

//listen to port
app.listen(3000)
console.log('database is running on port 4500')
