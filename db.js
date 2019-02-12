const Sequelize = require('sequelize');


const db = new Sequelize(
    process.env.NAME,
    'postgres',
    process.env.PASS, {
        host: 'localhost',
        dialect: 'postgres'
    });

db.authenticate().then(
    success = () => {
        console.log('connected to db');
    },

    fail = (err) => {
        console.log(err);
    }
)


const Users = db.import('./models/user');
const Shades = db.import('./models/shade');
const Dislikes = db.import('./models/dislike');

Users.hasMany(Shades);
Users.hasMany(Dislikes);

Shades.belongsTo(Users);
Dislikes.belongsTo(Users);

module.exports = db;