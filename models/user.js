module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

        screenname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        symbol: {
            type: DataTypes.ENUM,
            values: [ '>', '<', '@', '#', '$', '%', '*', '!'],
            allowNull: false,
            defaultValue: '>'
        },

        // remove these
        userDislikes: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};