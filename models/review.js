//commonJs 문법
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define("Review", {
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    r_title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    r_text: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    r_area: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    r_imageUrl: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  });
  return review;
};
