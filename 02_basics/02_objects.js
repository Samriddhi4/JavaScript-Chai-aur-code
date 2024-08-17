//singleton

//object literals
//key value pair
const mysym = Symbol("key1")
const jsuser = {
    name : "Samriddhi",
    age: 24,
    [mysym]: "Key1",
    location: "Ayodhya",
    email: "xyz@gmail.com"
}
console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser[mysym]);

