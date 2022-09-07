const Sequelize = require('sequelize');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } = require('../env/env');

const db = {};

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  define: {
    paranoid: true,
    timestamps: true,
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,
  },
});

db.sequelize = sequelize;
db.tblCountry = require('./models/country')(sequelize, Sequelize);
db.tblState = require('./models/state')(sequelize, Sequelize);
db.tblCity = require('./models/city')(sequelize, Sequelize);
db.tblTown = require('./models/town')(sequelize, Sequelize);
db.tblProduct = require('./models/product')(sequelize, Sequelize);
db.tblSubProduct = require('./models/subProduct')(sequelize, Sequelize);

// create tables if not exists
sequelize.sync().then(() => {
  console.log('Tables created');
});

module.exports = db;
