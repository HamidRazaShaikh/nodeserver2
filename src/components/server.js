var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

var todos = [];

app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.get ('/get',function (req,res){
    res.send({todos : todos})
});

app.post('/post' ,function (req,res){
    todos.push(req.body);
    console.log(req.body);
    res.send({status: 200, todos : todos})

});


app.set ('port' , process.env.PORT || 5000);

var server = app.listen(app.get ('port'), function () {
    console.log("this is " + server.address().port)
});

