require('dotenv').config();

const bodyParser = require('body-parser');
const app = require('express')();
const db = require('./db');
const user = require('./controllers/usercontroller');
const shade = require('./controllers/shadecontroller');
const dislike = require('./controllers/dislikecontroller');
const auth = require('./controllers/authcontroller');

app.use(bodyParser.json());

db.sync();

app.use('/auth', auth);
app.use('/users', user);
app.use('/shades', shade);
app.use('/dislike', dislike);


app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT} -  Happy Hacking ;)`);
});