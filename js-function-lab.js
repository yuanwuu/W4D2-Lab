function minusOne(num){
    if (num) {
        return (num - 1)
    } else {
        return str
    }
} 
// console.log(minusOne(10))
// console.log(minusOne(100))
// console.log(minusOne('Infinity'))


function makeSentence (param1,param2,param3) {
    return `Oh boy, do ${param1} ${param2} ${param3} or what?`
}
//console.log(makeSentence('I', 'want', 'chimichangas'))


// function getLastElement (arr) {

// }
// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 1;
});


//console.log(bigNumbers)


// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// // add string after each final participant
// const announcements = finalParticipants.map(mem => {
//   return mem + ' joined the contest.';
// })

// console.log(announcements);


/**
 * .find()
 * .map()
 * 
 */





/*
map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.
*/

const num = [65, 44, 12, 4];
const newArr = num.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)