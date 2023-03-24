// Local vs Global
//const dudesName = "Pepe"

function nameGenerator(nickName){
    return "Mr. " + nickName
}

console.log(nameGenerator("P MOSH"))

// Indirect

function indirectGreeter(nickname, myFunction) {
    const dudesName =  myFunction(nickname)
    console.log(`What's up ${dudesName}? How u doin?`)
}

indirectGreeter('David', nameGenerator)


// Direct
function directGreeter(nickName) {
    const dudesName =  nameGenerator(nickName)
    console.log(`What's up ${dudesName}? How u doin?`)
}

directGreeter('Alberto')

// Local vs Global
// console.log(dudesName)