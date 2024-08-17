//array
const myarray = [0,1,2,3,4,5,true,"samriddhi"]
const myHeros = ["Shaktiman", "Nagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

//array method
//myArr2.push(6)
//myArr2.pop()        //removes last value 
//myArr2.unshift(9)    // add value at the start of array
//myArr2.shift()

const newArr = myArr2.join()
// console.log(myArr2);
// console.log(newArr);

//slice or splice

console.log("A", myArr2);
const myn1 = myArr2.slice(1,3) //do not include last range
const myn2 = myArr2.splice(1,3) // include last range manipulates original array
console.log(myn1);
console.log(myn2)