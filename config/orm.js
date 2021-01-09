const connection = require("./connection");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm ={

    selectAll: function(cb){
        connection.query("SELECT * FROM burgers;",function(err,data){
            if(err){
                throw err;
              }
              cb(data);
        })
    },
    insertOne: function(cb){
        connection.query("INSERT INTO burgers WHERE ?;",function(err,data){
            if(err){
                throw err;
              }
              cb(data);
        })
    },
    updateOne: function(cb){
        connection.query("UPDATE ? WHERE ?;",function(err,data){
            if(err){
                throw err;
              }
              cb(data);
        })
    },
}
module.exports = orm;