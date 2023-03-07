function minusOne(num){
    if (num) {
        return (num - 1)
    } else {
        return str
    }
} 
console.log(minusOne(10))
console.log(minusOne(100))
console.log(minusOne('Infinity'))


function makeSentence (param1,param2,param3) {
    return `Oh boy, do ${param1} ${param2} ${param3} or what?`
}
console.log(makeSentence('I', 'want', 'chimichangas'))



/*
map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.


const num = [65, 44, 12, 4];
const newArr = num.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)
*/

function getLastElement (arr) {
    return arr[arr.length - 1];

}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));       // 6
console.log (getLastElement(['a', 'b', 'c']));          // 'c'
console.log (getLastElement([[1, 2, 3], [4, 5, 6]]));   // [4, 5, 6]