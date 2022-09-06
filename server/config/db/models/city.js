const { tblCityAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    intCityID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tblCityAssociations(sequelize, DataTypes);

  return City;
};
