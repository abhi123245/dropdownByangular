const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get(async (req,res)=>
{     
 var id=req.query.id;
  
   await Form1.user1.find({lead_id:id},function(err,docs){

    })
    .then((data)=>
    {
console.log(data);

   res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
return res.status(200).json(data);
    })
})

module.exports=router;