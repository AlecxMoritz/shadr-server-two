module.exports = (sequelize, DataTypes) => {
    return sequelize.define('shade', {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },

        dislikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },

        isFlagged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

        flags: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
};