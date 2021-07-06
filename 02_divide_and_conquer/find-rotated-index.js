function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  if (right && arr[left] >= arr[right]) {
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] <= arr[middle + 1]) {
      if (arr[left] <= arr[middle]) left = middle + 1;
      else right = middle - 1;

      middle = Math.floor((left + right) / 2);
    }

    if (num >= arr[0] && num <= arr[middle]) {
      left = 0;
      right = middle;
    } else {
      left = middle + 1;
      right = arr.length - 1;
    }
  }

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (num === arr[middle]) return middle;

    if (num > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}

module.exports = findRotatedIndex