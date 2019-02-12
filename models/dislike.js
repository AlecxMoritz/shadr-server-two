module.exports = (sequelize, DataTypes) => {
    return sequelize.define('dislike', {
        shade_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};