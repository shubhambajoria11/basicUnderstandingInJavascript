function linearSearch(arr, target) {
  // Expected :-  [1,2,3,6,8,9] , 8   ---> 4

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 6, 8, 9], 33));

// Big - 0 Notation ---> O(n)

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[midIndex] === target) {
    return midIndex;
  } else {
    if (arr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
      if (arr[i] === target) {
        return i;
      } else {
        return -1;
      }
    }
  }
}
console.log(binarySearch([1, 2, 3, 6, 8, 9], 6));

// Big - 0 Notation ---> O(log n)

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr.length - 1;

  let left = [];
  let right = [];

  for (let i = 0; i < pivot; i++) {
    //
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}
