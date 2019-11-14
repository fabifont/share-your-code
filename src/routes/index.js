const express = require('express')
const router = express.Router()
const config = require('../config/default')

router.get('/', async (req, res) => {
  await res.render('index', {
    languages: config.languages,
    expiry: config.expiry
  })
})

/*router.get('/', async (req, res) => {
  await res.render('index')
})*/

module.exports = router