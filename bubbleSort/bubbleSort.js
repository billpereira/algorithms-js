//return an Array sorted with Bubble Sort
// # of passes array.length -1
//O(n2) 

function bubbleSort(array) {
	for (var i = array.length - 1; i > 0; i--)
		for (var j = 0; j < i; j++) 
			if (array[j] > array[j + 1])
				[array[j], array[j + 1]] = [array[j + 1], array[j]];

	return array;
}

// var a = bubbleSort([3, 1, 4, 2, 8, 5]);
var a = bubbleSort([4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,4,1,3,2,50,2,13,52,21,35,23,100]);

console.log(a);


// function bubbleSort(array) {
//     for (var i = array.length; i > 0; i--) {
//       for (var j = 0; j < i; j++) {
//         if (array[j] > array[j + 1]) {
//           var temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
    
//     return array;
// }
 
// bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);