const findRotationCount = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[mid - 1] > arr[mid]) return mid;

    if (arr[start] < arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 0;
};

module.exports = findRotationCount