
const express=require("express");
const burger=require("../models/burger");
const router=express.Router();

router.get("/",function(req,res){
    burger.selectALL(function(data){
        res.render("index",{burgers:data})
    })
});
router.post("/api/burgers",function(req,res){
    burger.insertOne(req.body,function(data){
        res.status(200).end();
    })
})
router.put("/api/burgers:id",function(req,res){
    burger.updateOne(req.params.id,function(data){
        res.status(200).end();
    })
})
module.exports=router;