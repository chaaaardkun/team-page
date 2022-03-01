/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  env: {
    APP_URL: process.env.APP_URL,
    APP_JWT_REFRESH: process.env.APP_JWT_REFRESH,
    APP_JWT_SECRET: process.env.APP_JWT_SECRET,
    APP_JWT_SECRET_EXP_IN: process.env.APP_JWT_SECRET_EXP_IN,
    APP_JWT_REFRESH_EXP_IN: process.env.APP_JWT_REFRESH_EXP_IN,
  }
}