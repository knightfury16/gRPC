let users = [];


let user1 = {
    name:"Suhaib",
    passward:"1234"
}


let user2 = {
    name:"Anas",
    passward:"1234"
}


users.push(user1);
users.push(user2);

console.log(users)

const userIndex = users.findIndex(user => console.log(user));

console.log(userIndex);

if(userIndex != -1){
    users.splice(userIndex,1);
}

console.log(users)