// Import Server
const express = require('./server.js')

// Import external dependancies
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000

var app = express()

// CORS
app.use(cors())

// EJS
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use('/css', express.static(__dirname + '/css'))
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/', require('./routes/index'))
app.use('/paste', require('./routes/pastes'))

// Run the server!
const start = async () => {
  try {
    var listener = await app.listen(PORT)
    console.log('Server listening on localhost:' + listener.address().port)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
start()
