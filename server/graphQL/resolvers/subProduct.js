const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { Op } = Sequelize;
const { tblSubProduct } = db;

module.exports = {
	addSubProduct: async (args) => {
		const { strSubProduct, intProductID } =  args;

		try {
			const [SubProduct,created] = await tblSubProduct.findOrCreate({
				where: {
					[Op.and]: [
						{ strSubProductName: 'strSubProduct' },
						{ intProductID: intProductID },
					],
				},
				defaults: {
					strSubProductName:'strSubProduct',
					intProductID,
				},
			});

			if (!created) throw new Error('Town Already Exist');

			const newSubProductInfo = SubProduct.dataValues;

			return newSubProductInfo;
		} catch (err) {
			throw new Error(err);
		}
	},
};
