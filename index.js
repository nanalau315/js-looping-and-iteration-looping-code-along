// Code your solutions in this file
function writeCards(array, word){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`)
    }
    return newArray
}

// function countDown(number){
//     for (let i = number; i > -1; i--){
//         console.log(i)
//     }
// }

function countDown(number){
    let count = number
    while(count > -1){
        console.log(count--)
    }
}