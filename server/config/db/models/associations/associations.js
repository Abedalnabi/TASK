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

	tblProductAssociations: (sequelize, DataTypes) => {
		sequelize.models.Product.belongsTo(sequelize.models.Town, {
			foreignKey: {
				name: 'intTownID',
				type: DataTypes.INTEGER,
			},
		});
		sequelize.models.Product.belongsTo(sequelize.models.Country, {
			foreignKey: {
				name: 'intCountryID',
				type: DataTypes.INTEGER,
			},
		});
		sequelize.models.Product.belongsTo(sequelize.models.State, {
			foreignKey: {
				name: 'intStateID',
				type: DataTypes.INTEGER,
			},
		});
		sequelize.models.Product.belongsTo(sequelize.models.City, {
			foreignKey: {
				name: 'intCityID',
				type: DataTypes.INTEGER,
			},
		});
	},

	tblSubProductAssociations: (sequelize, DataTypes) => {
		sequelize.models.SubProduct.belongsTo(sequelize.models.Product, {
			foreignKey: {
				name: 'intProductID',
				type: DataTypes.INTEGER,
			},
		});
	},
};
