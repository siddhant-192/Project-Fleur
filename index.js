var con  = require('./connection');
var express = require('express');
var app = express();

var bodyparser=require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({encoded:true}));
app.get('/', function(req,res){
    res.sendFile(__dirname+'/customer_feedback.html')
});

app.post('/',function(req,res){
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var mbno = req.body.phone;
    var age = req.body.age;
    con.connect(function(error){
        if (error) throw error;


        var sql = "INSERT INTO Feedback(name, email) Values(?,?)";
        con.query(sql,[name, email], function(error,result){
            if (error) throw error;

            res.send("Feedback Has Been Sent")


        });

    });

});
app.listen(3000);