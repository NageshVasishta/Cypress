console.log('Hello world')

// fibonacci(2)

// sum(199,933)

// let array = [1,2,4];
// console.log(findMax(array))

// isPal('ABCDCBAA')

// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(filterEvenArray(array))

// console.log(factorial(5))

// if((isPrime(1331))){
//     console.log("not a prime")
// }else{
//     console.log("prime")
// }

let a = "adasfafaf adada"
console.log(toTitleCase(a))

function toTitleCase(str) { 

    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  
  } 

function isPrime(num){
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num % i == 0){
            return false
        }
    }
}
function factorial(num)
{
    for( let i=0;i<num;i++){
        console.log(i)
    if ((num==0)|| (num==1)){
        return 1
    }else {
        num = num * factorial(num-1)
        return num
    }

}
}
  function  filterEvenArray(array){
        
    let evenArray =   array.filter(val=>(val%2==0))
    console.log(evenArray)

}


    function isPal(string){
    if (string===string.split('').reverse().join('')){
        console.log(string + ' is a PALINDROME')
    }else {
        console.log(string + ' is not a PALINDROME')
    }

}

function findMax(array){

    return Math.max(...array)

}

function fibonacci(num) {
    let num1 = 0
    let num2 = 1
    let next = 0
console.log('Fibonacchi series : ')
    for (let i=0;i<num;i++){
        console.log(num1)
        next = num1+num2
        num1 = num2
        num2= next

    }
}


function sum(a,b){
    let sum = a+b
    console.log('Sum of '+a +' + '+b + ' is '+sum)
    return sum
}

