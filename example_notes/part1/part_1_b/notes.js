const array = [1,2,3,4];
array.push(5);
console.log('array length: ', array.length);
console.log("\n")

/** 
 * forEach recieve a function 
*/
array.forEach((value, index, array)=> {
    console.log('value + 2 = ', value + 2, ' at index ', index, ' in array ',array);
})
console.log("\n")

/** 
 * use concat for immutable
 * does not add to original array
*/
const array2 = [1,2,3]
const concatArr2 = array2.concat(4);

console.log(array2);
console.log(concatArr2);
console.log("\n")


/** 
 * map - creates a new array from old array
 * need to add return if use {}
 * no return if ()
*/
const array3 = [1,2,3];
const mapArray3 = array3.map(value =>  {return value * 3})
const mapStrinArr3 = array3.map(value => {return ('<li>' + value + '</li>')})

console.log(array3);
console.log(mapArray3);
console.log(mapStrinArr3);
console.log("\n")


/** 
 * Destructuring assignment - use to unpack values 
 * assign arr4[0] to first and arr4[1] to second
 * then assign the arr4[2] - arr[8] to rest
*/
const arr4 = [1,2,3,4,5,6,7,8,9];
const [first, second, ...rest] = arr4;

console.log(first, second);
console.log(rest);
console.log("\n")


/** 
 * Object
 */
const obj1 = {
    name: {
        first: 'obj1',
        last: 'nguyen',
    },
    age: 1,
    gender: 'male',
}

console.log(obj1.name);
console.log(obj1['name']['last'])
console.log("\n")


/**
 * This keyword
 */
 const arto = {
    name: 'Quang Nguyen',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log("doAddition: ", a + b)
    },
}
  
arto.greet()  // "hello, my name is Quang Nguyen" gets printed

// this doesn't add +1
arto.growOlderArrow = () => this.age += 1;

//does add 1
arto.growOlderFunc = function() {
    this.age += 1;
}
console.log(arto);
arto.growOlderArrow();
console.log("arrow function: ", arto.age);
arto.growOlderFunc();
console.log("regular function: ", arto.age);

arto.doAddition(1, 4)        // 5 is printed
const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed

arto.greet()       // "hello, my name is Arto Hellas" gets printed

// calling the method through a reference, the method loses knowledge of what the original this was
const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
console.log('\n');

/**
 * Classes
 */

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello, my name is', this.name);
    }
}

const emily = new Person('Emily', 21);
const quang = new Person('Quang', 25);
emily.greet();
quang.greet();
