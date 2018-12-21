// Memoized Fibonacci
// Use index of number in fibonacci sequence
// and an array as memory cache
//
//  Check to see if number already exists in cache
//  if number is in cache, use that number
//  if number is not in cache calculate ir and put it in cache
//  so it can be used multiple times in future
// O(n)

function fibMemo(index, cache) {
	cache = cache || [];
	if (cache[index]) return cache[index];
	else {
		if (index < 3) return 1;
		else cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
	}
	return cache[index];
}

console.log(fibMemo(50));
