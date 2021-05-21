/*
Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements
Eg. arr= [1, 2, 3, ,4 , 5, 6, 7], d = 2 output = [3, 4, 5, 6, 7, 1, 2]
*/

//Method 1: Using temp array O(n)
function rotateArray1(arr, d, n) {
  //if d is greater then array size, then return array itself
  if (d > n) {
    return arr;
  }
  //store first d data to temp array, shift other data to left and
  //push tempArray data to array last
  let tempArr = [];
  for (let i = 0; i < d; i++) {
    tempArr[i] = arr[i];
  }
  for (let i = 0; i < n; i++) {
    if (i >= n - d) arr[i] = tempArr[i - (n - d)];
    else arr[i] = arr[i + d];
  }
  return arr;
}

//Method 2: Rotate array one by one, d times O(n * d)
function rotateArray2(arr, d, n) {
  if (d > n) return arr;
  for (let i = 0; i < d; i++) {
    rotateArrayByOne(arr, n);
  }
  return arr;
}

//function to rotate array by 1 element
function rotateArrayByOne(arr, n) {
  let swap;
  for (let i = 0; i < n - 1; i++) {
    swap = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = swap;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const rotatedArray1 = rotateArray1(arr, 2, arr.length);
const rotatedArray2 = rotateArray2(arr, 3, arr.length);
console.log(rotatedArray1);
console.log(rotatedArray2);
