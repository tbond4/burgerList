
const express=require("express");
const burger=require("../models/burger");
const router=express.Router();

router.get("/",function(req,res){
    burger.selectALL(function(data){
        res.render("index",{burgers:data})
    });
});
router.post("/api/burgers",function(req,res){
    const burger_name=req.body.burger_name
    burger.insertOne(burger_name,function(data){
        res.redirect("/");
    });
});
router.put("/api/burgers/:id",function(req,res){
    burger.updateOne(req.params.id,function(data){
        res.status(200).end();
    });
});
module.exports=router;