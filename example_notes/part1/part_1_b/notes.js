const array = [1,2,3,4];
array.push(5);
console.log('array length: ', array.length);

/** 
 * forEach recieve a function 
*/
array.forEach((value, index, array)=> {
    console.log('value + 2 = ', value + 2, ' at index ', index, ' in array ',array);
})

/** 
 * use concat for immutable
 * does not add to original array
*/
const array2 = [1,2,3]
const concatArr2 = array2.concat(4);

console.log(array2);
console.log(concatArr2);

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


/** 
 * Destructuring assignment - use to unpack values 
 * assign arr4[0] to first and arr4[1] to second
 * then assign the arr4[2] - arr[8] to rest
*/
const arr4 = [1,2,3,4,5,6,7,8,9];
const [first, second, ...rest] = arr4;

console.log(first, second);
console.log(rest);


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