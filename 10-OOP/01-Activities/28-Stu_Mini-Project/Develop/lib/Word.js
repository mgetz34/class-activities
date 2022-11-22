const Letter = require("./Letter");

class Word {
    constructor(currentWord) {
        this.letters = currentWord.split(' ').map(letter =>
            new Letter(letter));
    }

    guessLetter(letterStr) {
        let final = false
        this.letters.array.forEach(letterObj) => {
            if (letterObj.guess(letterStr)) {
                final = true;
            };
        });
        final = false;
    }
}

module.exports = Word;
