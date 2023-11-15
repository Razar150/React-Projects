import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
})

con.connect(function(err){
    if(err) {
        debugger
        console.log("connection error")
    } else {
        console.log("connected")
    }
})

export default con