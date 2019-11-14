// Require the framework and instantiate it
const express = require('express')

// Require external modules
const mongoose = require('mongoose')

// Declare the DB URI
const DATABASE_URI =
  process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/share-your-code'

// Connect to DB
mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log('MongoDB connected…')
  },
  err => {
    console.log(err)
  }
)

module.exports = express