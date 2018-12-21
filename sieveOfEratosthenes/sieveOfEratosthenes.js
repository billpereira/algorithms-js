// Return all prime numbers up
// to a 'num' in a array
//
// *         [false, false, true, true, false, true, false, true, false, false]
// * index       0      1      2     3     4      5     6      7     8      9
//
// ! Optimization: Stop looping through at the square root of num

function sieveOfEratosthenes(n) {
	var primes = [];
	var result = [];

	for (var i = 0; i <= n; i++) primes[i] = true;

	primes[0] = false;
	primes[1] = false;

	for (var i = 2; i <= Math.sqrt(n); i++)
		for (var j = 2; j * i <= n; j++) primes[i * j] = false;

	for (var i = 0; i < primes.length; i++) if (primes[i]) result.push(i);

	return result;
}

var a = sieveOfEratosthenes(100000);
console.log(a);
