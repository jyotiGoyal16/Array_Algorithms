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

const arr = [1, 2, 3, 4, 5, 6, 7];
const rotatedArray = rotateArray1(arr, 2, arr.length);
console.log(rotatedArray);
