// - Search for a given value, inside a list
// - Runs in O(log n) run time, very performant
// - can be written as a recursive function

function binarySearch(numArray, key) {
    console.log('+');
    
	var middleIndex = Math.floor(numArray.length / 2);
	var middleElem = numArray[middleIndex];

	if (middleElem === key) return true;
	else if (middleElem < key && numArray.length > 1) {
		return binarySearch(numArray.splice(middleIndex, numArray.length), key);
	} else if (middleElem > key && numArray.length > 1) {
		return binarySearch(numArray.splice(0, middleIndex), key);
	} else return false;
}

var a = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 12);
 console.log(a);
 