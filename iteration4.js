const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum=0;
    let promedio=0;
    for (let index = 0; index < param.length; index++) {
        sum+=numbers[index];
    }
    return promedio=sum/param.length;

}
console.log(average(numbers));