const mysql=require("mysql");


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
    console.log("Connected as id ");
});
module.exports = connection;