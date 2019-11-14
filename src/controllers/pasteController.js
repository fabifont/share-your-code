// Get Data Models
const Paste = require('../models/Paste')

exports.create = async (req, res) => {
  try {
    let paste = new Paste({
      paste: req.body.code,
      expiresAt: new Date(Date.now() + req.body.expiry * 1000)
    })

    await paste.save()
    res.redirect(
      req.get('origin') + '/paste/' + paste.id + '?' + req.body.language
    )
  } catch (err) {
    throw new Error(err)
  }
}

exports.view = async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id).exec()
    const language = Object.keys(req.query)[0]

    await res.render('paste', {
      paste: paste.paste,
      lang: language
    })
  } catch (err) {
    throw new Error(err)
  }
}
