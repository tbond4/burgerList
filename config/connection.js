const mysql=require("mysql");

if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{
const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"cheetah4",
    database:"burgers_db"
});
}
connection.connect(function(err){
    if(err){
        console.log("Error connecting" + err.stack);
        return;
    }
    console.log("Connected as id ");
});
module.exports = connection;