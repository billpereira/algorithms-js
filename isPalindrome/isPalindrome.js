var isPalindrome = (string)=>{
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArr = []
    charactersArr.forEach(element => {
        if(validCharacters.indexOf(element)>-1) lettersArr.push(element);
    });

    if(lettersArr.join('') === lettersArr.reverse().join(''))return true;
    else return false;

}

console.log(isPalindrome("Code Javascript"));