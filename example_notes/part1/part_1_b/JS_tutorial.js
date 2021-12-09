// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

/**
 * NaN (short for "Not a Number")
 */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('hello'));
console.log(Number.isNaN(1));
console.log('\n');

/** 
 * for loop
 */
for (let i = 0; i < 3; i++){
    console.log('for loop', i);
}
console.log('\n');

/**
 * for...of loop
 */
const numArr = [1,2,3,4];
for (let val of numArr){
    console.log('for of', val);
}
console.log('\n');

/**
 * for...in loop
 */
const numObj = {a:1, b:2, c:3};
for (let val in numObj){
    console.log('for in', val, ':', numObj[val]);
}
console.log('\n');

/**
 * Object
 */
const newObj = new Object();
let obj = {};
obj = {
    name: 'Quang',
    age: '25',
    details: {
        height: '5.5ft',
        weight: '125',
    },
};
console.log(obj.details.height);
console.log('\n');

/** 
 * Object prototype
 */
function Person(name, age){
    this.name = name;
    this.age = age;
}

let person1 = new Person('Quang', '25');
person1.age = '26';
console.log(person1);
console.log('\n');

/**
 * Array
 */
let testArr = ['a', 'b'];
testArr[10] = 'h';
for (let arrVal of testArr){
    console.log('for of', arrVal);
}
console.log('\n');

testArr.push('i');
testArr.forEach((arrVal, index, arr) => {
    console.log('forEach', arrVal, 'index', index, 'array', arr);
})
console.log('\n');

/**
 * Function
 */
function avg (...arg){
    let sum = 0
    for (let val of arg){
        sum += val;     
    }
    return sum / arg.length;
}
console.log('avg', avg(2,3,4,5,6,7,8,9));
console.log('\n');

/**
 * Anonymous functions
 */
const anonymousFun = () => {
    console.log('Anonymous function');
}
anonymousFun();
console.log('\n');

/** 
 * Custom Object
 */
function makePerson(first, last){
    return{
        first: first,
        last: last,
        fullName: function() {                          // can't use arrow function here because this keyword dont work in arrow function
            return this.first + ' ' + this.last;
        },
        revFullName: function() {                       // can't use arrow function here because this keyword dont work in arrow function
            return this.last + ' ' + this.first;
        }
    }
}

const person2 = makePerson('Quang', 'Nguyen');          // doesn't use new because Object doesn't use this keyword
console.log('fullName', person2.fullName());
console.log('fullName reverse', person2.revFullName());
console.log('\n');

/**
 * Object with this keyword
 */

function createPerson(first, last){
    this.first = first;
    this.last = last;
}

createPerson.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}
createPerson.prototype.fullNameReverse = function() {
    return this.last + ' ' + this.first;
}

let createPerson1 = new createPerson('Quang', 'Nguyen');
console.log('fullName', createPerson1.fullName());
console.log('fullName reverse', createPerson1.fullNameReverse());
createPerson.prototype.firstNameCap = function() {
    return this.first.toUpperCase();
}
console.log('firstNameCap', createPerson1.firstNameCap());
console.log('\n');

/**
 * Closures
 */
function makeAdder(a) {
return function(b) {
    return a + b;
};
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
console.log(add5(6)); // 11
console.log(add20(7)); // 27
console.log('\n');