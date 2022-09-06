module.exports = {
  tblStateAssociations: (sequelize, DataTypes) => {
    sequelize.models.State.belongsTo(sequelize.models.Country, {
      foreignKey: {
        name: 'intCountryID',
        type: DataTypes.INTEGER,
      },
    });
  },

  tblCityAssociations: (sequelize, DataTypes) => {
    sequelize.models.City.belongsTo(sequelize.models.State, {
      foreignKey: {
        name: 'intStateID',
        type: DataTypes.INTEGER,
      },
    });
  },

  tblTownAssociations: (sequelize, DataTypes) => {
    sequelize.models.Town.belongsTo(sequelize.models.City, {
      foreignKey: {
        name: 'intCityID',
        type: DataTypes.INTEGER,
      },
    });
  },
};
