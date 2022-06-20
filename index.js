function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = "";

  // no need to reverse the string if length >=0 or <=1... it returns true immediately
  if (word.length === 0 || word.length === 1) return true;
  // otherwise reverse the string and check if it is a palindrome
  // return word.split("").reverse().join("") === word ? true : false;

  // ALTERNATIVELY

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  return reverseWord === word;

}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
