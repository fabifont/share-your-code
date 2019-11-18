// Get Data Models
const Paste = require('../models/Paste')

exports.create = async (req, res) => {
  try {
    if (req.body.language == undefined) req.body.language = ''
    if (req.body.expiry == undefined) req.body.expiry = 604800

    let paste = new Paste({
      paste: req.body.code,
      language: req.body.language,
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
    let language = Object.keys(req.query)[0]

    if (language == undefined) language = ''

    if (paste == null || paste.language != language)
      res.render('error', { status: 404, url: req.url })
    else {
      await res.render('paste', {
        paste: paste.paste,
        lang: language
      })
    }
  } catch (err) {
    throw new Error(err)
  }
}