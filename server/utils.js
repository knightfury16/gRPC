const bcrypt = require('bcrypt');
const {connection} = require('./sqlConnection');

let activeUser = [];
const saltRounds = 8;

// Return true or false
const addUser = (username, passward) => {

    return new Promise((resolve,reject) => {
        
        // hash the password
        const hashed_pssword = bcrypt.hashSync(passward,saltRounds);
        
        connection.query("INSERT INTO Users (username, user_password) VALUES (?,?)",[username,hashed_pssword],
        (err,result) => {
            if(err){
                reject(err);
            }
            activeUser.push(username);
            resolve(result);
        });
    });
}

const authenticate = (username, passward) => {

    return new Promise((resolve,reject) => {
        connection.query("SELECT * FROM Users WHERE username = ?",[username],
        (err,result) => {
            if(result.length == 1 && bcrypt.compareSync(passward,result[0].user_password)){
                if(activeUser.find(user => user === username ) == undefined)activeUser.push(username);
                resolve(result);
            }
            else{
                reject(err)
            }
        });
    })
}

const logOut = (username) => {
    const userIndex = activeUser.findIndex(user => user === username);
    if(userIndex != -1){
        activeUser.splice(userIndex,1);
        return true;       
    }
    else {
        return false;
    }
}

module.exports = {
    addUser,
    authenticate,
    logOut
}