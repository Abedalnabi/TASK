const { tblSubProductAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
  const SubProduct = sequelize.define('SubProduct', {
    intSubProductID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    strSUbProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  });

  tblSubProductAssociations(sequelize, DataTypes);

  return SubProduct;
};
