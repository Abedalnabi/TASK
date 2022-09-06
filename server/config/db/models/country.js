module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    intCountryID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Country;
};
