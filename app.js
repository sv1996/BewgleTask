const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(express.static("public"));

//TODO
mongoose.connect("mongodb://localhost:27017/bewgleDB" , {useNewUrlParser:true});
//var myDateString = Date();
const processSchema = {
  date:  String,
  method:String,
  headers: String,
  path:String ,
  query: String,
  body:String,
  duration:String

  Sring 
//  content: String


};





const Process =  mongoose.model("Process" , processSchema  );
app.get("/processes" , function(req ,res)
{
  Process.find(function(err , foundProcesses)
  {
  //  console.log(foundInfos);
  // console.log( foundProcesses);
//   res.send(foundProcesses);
//console.log( foundProcesses);
   console.log(req.Methods);
  //if(!err){
///    res.send(foundProcesses);
///  }
//  else
//  {
//    res.send(err);
//
//console.log(req.body.date)
  });
});


app.listen(3000, function() {
 console.log("Server started on port 3000");
});
