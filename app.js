const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(express.static("public"));

//TODO
mongoose.connect("mongodb://localhost:27017/bewgleDB" , {useNewUrlParser:true});
const infoSchema = {
  title: String,
  content: String
};

const Infos =  mongoose.model("Info" ,infoSchema  );
app.get("/infos" , function(req ,res){
  Infos.find(function(err , foundInfos){
  //  console.log(foundInfos);
    res.send(foundInfos);
  });
});


app.listen(3000, function() {
 console.log("Server started on port 3000");
});
