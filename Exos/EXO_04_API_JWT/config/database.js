const { DB_USER, DB_NAME, DB_DIALECT, DB_HOST, DB_PASS, DB_PORT } = process.env;

module.exports = {
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT,
  dialect: DB_DIALECT,
  options: {
    trustServerCertificate: true,
  },
};
