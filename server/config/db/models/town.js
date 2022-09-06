const { tblTownAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const Town = sequelize.define('Town', {
    intTownID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strTown: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tblTownAssociations(sequelize, DataTypes);

  return Town;
};
