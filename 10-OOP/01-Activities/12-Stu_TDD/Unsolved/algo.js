function Algo() { }

Algo.prototype.reverse = function (str) {
    const newStr = str.split('').reverse().join('')

    return newStr
};

Algo.prototype.isPalindrome = function (str) {
    const revStr = str.split('').reverse().join('')

    if (revStr === str) {
        return true
    } else {
        return false
    }
};

Algo.prototype.capitalize = function (str) {
    const wordArr = str.split(' ');
    const cleanArr = [];
    for (const word of wordArr) {
        const singleWord = word.split();
        const firstLetter = singleWord.splice(0, 1)[0].toUpperCase();
        singleWord.unShift(firstLetter);
        cleanArr.push(singleWord.join(''));
        return cleanArr.join(' ');
    }
};
module.exports = Algo;
