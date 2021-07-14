function product(nums) {
  let num = 1;
  function getProduct(nums) {
    if (nums.length === 0) return num

    if (nums[0] != 0) {
      num = num * nums[0];
    } else return num;

    console.log("num at end: ", num);
    return getProduct(nums.slice(1));
  }
  return getProduct(nums);
}




/** longest: return the length of the longest word in an array of words. */

// Given a list of words, return the length of the longest:
// longest(["hello", "hi", "hola"])  // 5


function longest(words) {
  let wordLength = 0;

  function getLength(words) {
    console.log("wordLength: ", wordLength);
    if (words.length === 0) return 0;
    if (words[0].length > wordLength) {
      console.log("words[0].length", words[0].length)
      wordLength = words[0].length
      console.log("wordLength is:", wordLength);
    }
    getLength(words.slice(1))
    return wordLength;
  }
  return getLength(words);
}


/** everyOther: return a string with every other letter. */
// Write a function that returns a string of every other character:
// everyOther("hello")  // "hlo"
function everyOther(str) {
  let newStr = "";
  let count = 0;
  function everyOtherInternal(str) {
    if (str.length === 0) return newStr;
    if (count % 2 === 0) {
      newStr = newStr + str[0];
    };
    count++;
    return everyOtherInternal(str.slice(1));
  }

  return everyOtherInternal(str);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  console.log("str: ", str);
  if (str.length === 0) return true;
  if (str[0] != str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1))
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let count = -1;
  function findIndexInternal(arr, val) {
    count++;
    console.log("function called")
    if (arr.length === 0) return -1;
    if (arr[0] === val) {
      console.log("arr[0] is: ", arr[0])
      return count
    }

    return findIndexInternal(arr.slice(1), val)
  }

  return findIndexInternal(arr, val);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let new_Str = "";
  function revStringInternal(str) {
    if (str.length === 0) return new_Str;
    new_Str = new_Str + str[str.length - 1];

    return revStringInternal(str.slice(0, str.length - 1));
  }

  return revStringInternal(str);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  function gatherStringsInternal(obj) {
    for (let item in obj) {
      if (typeof obj[item] === "object") {
        gatherStringsInternal(obj[item])
      }
      else {
        if (typeof obj[item] === "string") {
          arr.push(obj[item]);
        }
      }
    }

    return arr;
  }

  return gatherStringsInternal(obj);
}




/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

//?

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  // binarySearch
};