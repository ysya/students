
const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
  CSRF_TOKEN_SECRET: process.env.CSRF_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_TIME_IN_MS: process.env.JWT_ACCESS_TOKEN_TIME_IN_MS,
  JWT_REFRESH_TOKEN_TIME_IN_MS: process.env.JWT_REFRESH_TOKEN_TIME_IN_MS,
  CSRF_TOKEN_TIME_IN_MS: process.env.CSRF_TOKEN_TIME_IN_MS,
  MAIL_FROM_USER: process.env.MAIL_FROM_USER,
  EMAIL_VERIFICATION_TOKEN_SECRET: process.env.EMAIL_VERIFICATION_TOKEN_SECRET,
  EMAIL_VERIFICATION_TOKEN_TIME_IN_MS:
    process.env.EMAIL_VERIFICATION_TOKEN_TIME_IN_MS,
  PASSWORD_SETUP_TOKEN_TIME_IN_MS: process.env.PASSWORD_SETUP_TOKEN_TIME_IN_MS,
  PASSWORD_SETUP_TOKEN_SECRET: process.env.PASSWORD_SETUP_TOKEN_SECRET,
  UI_URL: process.env.UI_URL,
  API_URL: process.env.API_URL,
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
};

module.exports = { env };
