//My SQL connection
const mysql = require('mysql');

var con = mysql.createConnection({

    host:"cmpe202.c1c5kj5nyxxq.us-east-2.rds.amazonaws.com", // ip address of server running mysql
    user:"admin", //user name to your my sql server
    password:"12345678",
    database:"chapriAirlines"
});

con.connect(function(err){

    console.log("Database Connection Successful");

})

module.exports = con;