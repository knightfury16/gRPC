
let users = [];
let activeUser = [];


const authenticate = (username, passward) => {

    let found = false;

    users.forEach(user => {
        if(username === user.name  && passward === user.passward){
            found = true;
            if(activeUser.find(user => user === username ) == undefined)activeUser.push(username);
        }
    });

    return found;
}

const addUser = (username, passward) => {
    
    if(users.find(user => user.name == username)){
        return false;
    }

    users.push({
        name:username,
        passward: passward
    });
    activeUser.push(username);
    return true;
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
    authenticate,
    addUser,
    logOut
}