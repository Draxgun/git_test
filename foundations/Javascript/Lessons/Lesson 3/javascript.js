console.log("Hola")


function add7(num1){
    return num1+7;

}

console.log(add7(5));


function multiply(num1,num2){
    return num1*num2;
}

console.log(multiply(5,10));

function capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
}

console.log(capitalize("Hola"))

function lastLetter(string){
    return string.charAt(string.length-1)
}

/* or

function lastLetter(string){
    return string.slice(-1)
}
*/

console.log(lastLetter("Hola"));


function FizzBuzz(number){
    for (let i=1;i<=number;i++){
        if(i%3 === 0 && i%5===0){
            console.log("FizzBuzz")
        }else if  (i%3===0){
            console.log("Fizz")
        }else if (i%5===0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }

    }
}


let answer = parseInt(prompt("Ingresa un numero : "));
FizzBuzz(answer);