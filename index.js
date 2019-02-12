require('dotenv').config();

const bodyParser = require('body-parser');
const app = require('express')();
const db = require('./db');
const user = require('./controllers/usercontroller');
const shade = require('./controllers/shadecontroller');
const dislike = require('./controllers/dislikecontroller');
const auth = require('./controllers/authcontroller');
const adminShade = require('./controllers/admin-shadecontroller');
const adminUser = require('./controllers/admin-usercontroller');

app.use(bodyParser.json());
db.sync();

app.use('/auth', auth);
app.use('/users', user);
app.use('/shades', shade);
app.use('/dislikes', dislike);

app.use('/admin/shade', adminShade);
app.use('/admin/user', adminUser);


app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT} -  Happy Hacking ;)`);
});