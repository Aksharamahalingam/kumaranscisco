/*Documentation 


1. Signup 
2. Passport 
3.   Login

*/
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Student = require("./models/student.js")

mongoose.connect("mongodb://admin:admin123@ds213968.mlab.com:13968/cisco_data_sample",{useNewUrlParser: true});

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

///Server Start/////

app.listen(8000, process.env.IP, function(req, res)
{
    console.log("SERVER STARTED");
});


///Routes

app.get("/", function(req, res)
{
     
    res.render('index');
});

app.post("/hello", function(req, res)
{
     var StudentVar = new Student({
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          emailid: req.body.emailid,
          phonenumber: req.body.phonenumber,
     });

     StudentVar.save(function(err, obj)
     {
          if(err)
          {
               console.log("Error")
          }
          else
          {
               res.render("post", {pass:obj})
          }
     });
});

app.get("*", function(req,res){
     res.send("Error: No such page!");
 });

app.get('/see', function(req, res)
{
     Student.find({}, function(err, obj)
     {
          if(err)
          {
               console.log(err);

          }
          else
          {
               res.render("see", {obj:obj})
          }
     });
});