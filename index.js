require('dotenv').config();

const bodyParser = require('body-parser');
const app = require('express')();
const db = require('./db');
const user = require('./controllers/usercontroller');
const shade = require('./controllers/shadecontroller');
const dislike = require('./controllers/dislikecontroller');

app.use(bodyParser.json());

db.sync();

app.use('/users', user);
app.use('/shades', shade);
app.use('/dislike', dislike);


app.listen(4000, () => {
    console.log(`Running on ${process.env.PORT} -  Happy Hacking ;)`);
});