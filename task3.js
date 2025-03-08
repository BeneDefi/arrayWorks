let array = [1,44,3,4,5,7];

function findFirstEven(array){
    return array.find((num) => num % 2 ===0);
}

console.log(findFirstEven(array));
