const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  env: {
    //   API_KEY: process.env.API_KEY,
    //   AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    //   DATABASE_URL: process.env.DATABASE_URL,
    //   PROJECT_ID: process.env.PROJECT_ID,
    //   STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    //   MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    //   APP_ID: process.env.APP_ID
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
  }
})
