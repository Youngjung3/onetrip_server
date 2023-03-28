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
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		p_edate: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		p_snum: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		p_enum: {
			type: DataTypes.STRING(20),
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
		imageUrl: {
			type: DataTypes.STRING(300),
			allowNull: true,
		},
		count: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
		},
		departure: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		redeparture: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		hotel:{
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		soldout:{
			type:DataTypes.INTEGER(1),
			allowNull:false,
			defaultValue:0,
		},
		heart:{
			type:DataTypes.INTEGER(1),
			allowNull:false,
			defaultValue:0,
		},
		start: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		end: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	});
  return product;
};