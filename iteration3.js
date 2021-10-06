const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numeros) {
    let sum=0;
    for (let index = 0; index < numeros.length; index++) {
        sum+=numbers[index];
        
    }
    return sum;
}
console.log(sumNumbers(numbers));