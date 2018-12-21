function reverseWords(string) {
	var stringArray = string.split(' ');
	var reversedStringArray = [];

	//Can be used forEach instead
	for (var i = 0; i < stringArray.length; i++) {
		word = stringArray[i].split('');
		var reversedWord = '';
		for (var a = word.length - 1; a >= 0; a--) {
			reversedWord += word[a];
		}
		reversedStringArray.push(reversedWord);
	}
	return reversedStringArray.join(' ');
}

console.log(reverseWords('Essa é a string!'));
