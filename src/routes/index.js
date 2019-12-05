const express = require('express')
const router = express.Router()
const config = require('../config/default')
const recaptcha = require('./recaptcha')


router.get('/', recaptcha.middleware.render, async (req, res) => {
  await res.render('index', {
    languages: config.languages,
    expiry: config.expiry,
    captcha: res.recaptcha
  })
})

module.exports = router
