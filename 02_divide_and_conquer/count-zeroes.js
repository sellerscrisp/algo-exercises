// O(log N)
function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx !== rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    if (midVal === 1) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx;
    }
  }

  let numZeroes = arr.length - leftIdx;

  if (arr[leftIdx] !== 0) {
    numZeroes = 0;
  }

  return numZeroes;
}

module.exports = countZeroes