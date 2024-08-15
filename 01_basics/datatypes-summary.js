// Primitive
//7 types : String,bool,number,null,undefined,symbol,bigint

//Reference (Non-primitive)
//array,objects,functions

//++++++++++++++++++++++++++++
// Stack memory(Primitive), Heap memory(Non-Primitive)
let mychannelname = "WanderLust"

let anothername = mychannelname
anothername = "chai aur code"
console.log(mychannelname);
console.log(anothername);

let userone = {
    email: "samriddhixyz@gmail.com",
    upi: "user@ybl"
}
//same reference for everything under heap
let usertwo = userone
usertwo.email = "user123@gmail.com"
console.log(userone.email);
console.log(usertwo.email);