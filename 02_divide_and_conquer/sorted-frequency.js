// O(log N)
function sortedFrequency(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (rightIdx !== leftIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx]
    if (midVal === num) {
      rightIdx = midIdx;
    } else if (midVal > num) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }

  const firstIdx = leftIdx;
  rightIdx = arr.length - 1;

  while (leftIdx !== rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];
    if (midVal === num) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }

  const lastIdx = leftIdx;
  let sNum = lastIdx - firstIdx;

  if (firstIdx === lastIdx) {
    sNum = 1;
  }

  if (arr[firstIdx] !== num) {
    sNum = -1;
  }

  return sNum
}

module.exports = sortedFrequency