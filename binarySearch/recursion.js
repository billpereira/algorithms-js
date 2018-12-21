//Factiorial
// 4! =4 * 3 * 2* 1 = 24

function factorial(num){
    if (num === 2) {
        return num;
    }
    else {
        return num * factorial(num - 1)
    }
}


var a = factorial('4')

console.log(a);

