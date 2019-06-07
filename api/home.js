const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get(async (req,res,next)=>
{ 
    console.log("welcome");
})
.post(async (req,res,next)=>
{ 
    
 
var email=req.body.email;
var password = req.body.name;

await Form1.user1.findOne({agent_email:email},function(error,docs){

 if(docs.agent_name==password) {
   
  req.session['user']=docs;
console.log(req.session.user);
  res.redirect('/finduser');
 }
else{
    console.log("plzz enter the correct password");
     res.end("plzz enter the correct password");
} 

})
})
module.exports=router;