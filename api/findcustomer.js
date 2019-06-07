const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.post(async (req,res,next)=>
{
    console.log("wellcome");
  
})
.get(async (req,res,next)=>
{  id=req.query.id;
  pagenumber=req.body.pagenumber;
  size=req.body.size;
 await Form1.customer1.find({agent_id:id},function(err,docs){

 })
  
    
    .then((data)=>
    {
console.log(data)
   res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
res.status(200).json(data);

  })

})
module.exports=router;