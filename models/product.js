//commonJs 문법
module.exports = (sequelize, DataTypes) => {
	const product = sequelize.define("Product", {
		p_name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		p_country: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		p_area: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
		},
		p_sdate: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		p_edate: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		p_snum: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
		p_enum: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
		trans: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		retrans: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		theme: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING(300),
			allowNull: true,
		},
		count: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
		},
		departure: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		redeparture: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	});
  return product;
};