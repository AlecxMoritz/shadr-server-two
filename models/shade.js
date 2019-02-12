module.exports = (sequelize, DataTypes) => {
    return sequelize.define('shade', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}