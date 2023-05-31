const express= require("express")
const https= require("https");
const bodyParser= require("body-parser")
const app= express();
const cors = require('cors');
app.set('view engine','ejs'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));
app.get("/",function(req,res){
    res.render("index");   
})
// create a route to send json data to client on '/data' route


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is runninng on port 3000");
})