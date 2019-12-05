 const express = require('express')
const router = express.Router()
const recaptcha = require('./recaptcha')

//Import controllers
const pasteController = require('../controllers/pasteController')

router.post('/', recaptcha.middleware.verify, async (req, res) => {
  if(!req.recaptcha.error)
    await pasteController.create(req, res)
  else
    res.render('error', { status: 404, url: req.url })
})

router.get('/:id', async (req, res) => {
  await pasteController.view(req, res)
})

module.exports = router