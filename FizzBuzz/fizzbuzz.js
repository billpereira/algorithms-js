/*
    Fizz Buzz Algorithm shoud receive a number
    and print from 1 to this number, and every time
    a number is divisible by 3 it should replace the number by 
    Fizz, if divisible by 5, replace by world Buzz... If divisible by both 
    FizzBuzz
*/

function fizzBuzz(num) {
	for (var i = 1; i <= num; i++) {
		if (i % 15 === 0) console.log('FizzBuzz');
		else if (i % 3 === 0) console.log('Fizz');
		else if (i % 5 === 0) console.log('Buzz');
		else console.log(i);
	}
}

//my Solution:
// var fizzBuzz = (num) => {
//     for (var i = 1; i<= num; i++){
//         if(i%3 === 0) {
//             if(i%5 === 0){
//                 console.log("FizzBuzz")
//             }
//             else{
//                 console.log("Fizz")
//             }
//         }else{
//             if(i%5 === 0){
//                 console.log("Buzz")
//             }else{
//                 console.log(i)
//             }
//         }
//     }
// }

fizzBuzz(40);
