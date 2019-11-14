const express = require('express')
const router = express.Router()

//Import controllers
const pasteController =  require('../controllers/pasteController')

router.post('/', async (req, res) => {
  await pasteController.create(req)
  return res.redirect('/')
})

router.get('/:id', async (req, res) => {
  await pasteController.view(req, res)
})

module.exports = router