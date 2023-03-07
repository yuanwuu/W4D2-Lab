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

console.log(`----------------------------------`)

function makeSentence (param1,param2,param3) {
    return `Oh boy, do ${param1} ${param2} ${param3} or what?`
}
console.log(makeSentence('I', 'want', 'chimichangas'))

console.log(`------------------------------------`)

function getLastElement (arr) {
    return arr[arr.length - 1];

}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));       // 6
console.log (getLastElement(['a', 'b', 'c']));          // 'c'
console.log (getLastElement([[1, 2, 3], [4, 5, 6]]));   // [4, 5, 6]