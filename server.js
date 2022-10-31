require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express');
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const path = require('path')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo');
const { collection } = require('./app/models/menu');


app.use(flash())

app.use(express.json())

//global middleware



app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
        mongoUrl:'mongodb://localhost/fleur'

    }),
    cookie: {maxAge : 1000 * 60 * 60 * 24} //24 hours
}))

app.use((req,res,next)=> {
    res.locals.session= req.session;
    next()
})






require('./routes/web')(app)



//Using template engine

app.use(express.static('public'));

//app.use(express.static(path.join(__dirname,'/Resources/css')));
// app.use(express.static(path.join(__dirname,'/Resources/js')));
app.use(expressLayout)
app.set('views', path.join(__dirname,'/Resources/views'));
//app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');



//connecting to db
const url ='mongodb://localhost/fleur'

mongoose.connect(url, { useNewUrlParser: true }) ;
const connection = mongoose.connection;
connection.once('open', () => {
console.log ("Database connected...");
}).on('error', function (err) {
    console.log(err);
});

//sessionstore

// let mongoStore = new MongoDbStore({
//                 mongooseConnection: connection,
//                 collection: 'customer_sessions'

//             })

//session config

app.listen(3000,() =>{
    console.log("Listening on port 3000")
})