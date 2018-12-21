function caesarCipher(str, num) {
	var lowerCaseString = str.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var newString = '';

	num = num % alphabet.length;
	for (var i = 0; i < lowerCaseString.length; i++) {
		console.log(i);
		var currentLetter = lowerCaseString[i];
		if (currentLetter === ' ') {
			newString += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + num;
		if (newIndex > alphabet.length) newIndex = newIndex - alphabet.length;
		if (newIndex < 0) newIndex = alphabet.length + newIndex;
		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} else newString += alphabet[newIndex];
		console.log(newString);
	}

	return newString;
}

console.log(caesarCipher('Zoo Keeper', -200));
