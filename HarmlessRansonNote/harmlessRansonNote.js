/*
    Harmless Ranson Note
    This algorithm will take a note and check if is possible
    to write it using as base a know piece of text

    Big O Notation = O(n)

*/

var noteIsPossible = true;

function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};

	magazineArr.forEach(word => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	noteArr.forEach(word => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossible = false;
		} else noteIsPossible = false;
	});

	return noteIsPossible;
}

harmlessRansomNote(
	'this is super awesome',
	'this is a test for the magazine object and it is awesome'
);
console.log(noteIsPossible);
