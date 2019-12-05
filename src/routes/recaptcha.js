const keys = require('../config/keys')

const Recaptcha = require('express-recaptcha').RecaptchaV3
const recaptcha = new Recaptcha(keys.SITE_KEY, keys.PRIVATE_KEY, {callback:'cb'})

module.exports = recaptcha