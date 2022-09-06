require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  DB_HOST: process.env.RDS_HOSTNAME,
  DB_USERNAME: process.env.RDS_USERNAME,
  DB_PASSWORD: process.env.RDS_PASSWORD,
  DB_PORT: process.env.RDS_PORT,
  DB_NAME: process.env.RDS_DATABASE,
  SECRET: process.env.SECRET,
  SERVER_PATH: process.env.SERVER_PATH,
  CLIENT_WEB_PATH: process.env.CLIENT_WEB_PATH,
};
