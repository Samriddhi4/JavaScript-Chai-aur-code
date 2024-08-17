//const tinderobject = new Object()
const tinderuser = {}
tinderuser.id = 1234
tinderuser.name = "Samriddhi"
tinderuser.isloggedin = false
//console.log(tinderuser);

const regularuser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Samriddhi",
            lastname: "Tripathi"

        }
    }
}
//console.log(regularuser.fullname);

//combining objects
const obj1= {1:"a",2:"b",3:"c"}
const obj2= {4:"d",5:"e",6:"f"}
const obj3 = (Object.assign({},obj1,obj2))
//const obj3 = {obj1,obj2}
console.log(obj3)