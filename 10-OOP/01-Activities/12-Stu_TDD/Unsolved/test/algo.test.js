const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a
    it('test for the `reverse` method that should take a string as an argument and return a new reversed version of the string', () => { 
    const testString = "hello World!"
    const testAlgo = ALgo.reverse(testString)

    expect(testALgo === "!dlroW olleH").toEqual(testString);
  });
});
  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    const str1 = 'racecar'
    const str2 = 'neon'
    const algo1 = new Algo().isPalindrome(str1)
    const algo2 = new Algo().isPalindrome(str2)

    expect(algo1).toEqual(true)
    expect(algo2).toEqual(false)
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    const testString = "capitalize every first word of the string."
    const testAlgo = new Algo().capitalize(testString)

    expect(testAlgo).toEqual(true)
  });
});
