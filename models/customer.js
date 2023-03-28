//commonJs 문법
module.exports = (sequelize, DataTypes) => {
	const customer = sequelize.define("Customer", {
		c_id: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(25),
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
		},
		gender: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		telephone: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
		},
		usetype: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		reservation: {
			type: DataTypes.INTEGER(30),
			allowNull: true,
		},
		imageUrl: {
			type: DataTypes.STRING(300),
			allowNull: true,
		},
		l_state:{
			type:DataTypes.INTEGER(1),
			allowNull:false,
			defaultValue:0,
		},
	});
  return customer;
};