const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get(async (req,res,next)=>
{
    console.log("wellcome");
  
})
.post(async (req,res,next)=>
{ 
    var id= req.body.value;
 await Form1.user1.find({lead_id:id},function(err,docs){

    })
    .then((data)=>
    {
        console.log(data);
res.status(200).json(data);
    })

})
module.exports=router;