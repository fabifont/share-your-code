// Get Data Models
const Paste = require('../models/Paste')

exports.create = async req => {
  try {
    let paste = new Paste({
      paste: req.body.code,
      expiry:
        req.body.expiry == 'n'
          ? null
          : new Date(Date.now + req.body.expire * 1000)
    })

    await paste.save()

    //res.redirect(req.origin + '/' + paste.id + '?' + req.body.language)
  } catch (err) {
    throw new Error(err)
  }
}

exports.view = async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id).exec()
    const language = Object.keys(req.query)[0]

    if (language) {
      //renderizzo highlight
    } else {
      res.type = 'text/plain'
      res.body = paste.paste
    }
  } catch (err) {
    throw new Error('404, Paste Not Found')
  }
}
