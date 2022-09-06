const { tblStateAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    intStateID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  tblStateAssociations(sequelize, DataTypes);

  return State;
};
