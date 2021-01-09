const orm=require("../config/orm");

const burger={
    selectALL: function(cb){
        orm.selectAll(function(res){
            cb(res);
        })
    },
    insertOne: function(cb){
        orm.insertOne(function(res){
            cb(res);
        })
    },
    updateOne: function(cb){
        orm.updateOne(function(res){
            cb(res);
        })
    }
}

module.exports=burger;