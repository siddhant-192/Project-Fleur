const mongoose = require('mongoose')
const express = require('express');
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const path = require('path')



app.listen(3000,() =>{
    console.log("Listening on port 3000")
})

require('./routes/web')(app)

//Using template engine
app.use(express.static(path.join(__dirname,'/Resources/css')));
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
