const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const layout = require('express-layout')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const flash = require('express-flash');

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../Public')));

// const middlewares = [
//     layout(),
//     express.static(path.join(__dirname, '../Public')),
//     cookieParser(),
//     session({
//       secret: 'super-secret-key',
//       key: 'super-secret-cookie',
//       resave: false,
//       saveUninitialized: false,
//       cookie: { maxAge: 60000 }
//     }),
//     flash()
//   ];

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(userRouter)
// app.use(middlewares);
//app.use(express.static(path.join(__dirname, '../Public')))

app.get('/', (req, res) => {
    res.render('index', { layout:false, success: ''});
  });

app.listen(port, () => {
    console.log('Server is up on '+ port)
})