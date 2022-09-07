const { tblProductAssociations } = require('./associations/associations');

module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		intProductID: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		strProductName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		strCountry: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		strCity: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		strState: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		strTown: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	tblProductAssociations(sequelize, DataTypes);

	return Product;
};
