// var db = connect("mongodb://localhost/admin");

db = db.getSiblingDB('admin'); // we can not use "use" statement here to switch db

// db.createUser(
//     {
//         user: "root",
//         pwd: "root",
//         roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
//     }
// )