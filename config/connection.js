const mysql=require("mysql");
const { threadId } = require("../../../week 13/Day-03/16-MvcExample/config/connection");

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"cheetah4",
    database:"burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting" + err.stack);
        return;
    }
    console.log("Connected as id " + threadId);
});
module.exports = connection;