//find pyhthagorean triplet in unsorted array
//Given an array A of n elements, find 3 elements such that
// A[i]^2 + A[j]^2 = A[k]^2

//start of helper functions
function getSquare(element) {
  return element * element;
}

function checkSum(value1, value2, value3) {
  return value1 + value2 === value3;
}

function checkPythagorean(arr, index1, index2, index3) {
  let sqr1, sqr2, sqr3;
  sqr1 = getSquare(arr[index1]);
  sqr2 = getSquare(arr[index2]);
  sqr3 = getSquare(arr[index3]);
  if (
    checkSum(sqr1, sqr2, sqr3) ||
    checkSum(sqr1, sqr3, sqr2) ||
    checkSum(sqr2, sqr3, sqr1)
  ) {
    return true;
  }
  return false;
}
//end of helper functions

//Brute force- Time complexity O(n^3) Space complexity O(1)
function findPyhtagoreanTriplet(arr) {
  let length = arr.length;
  let outer,
    inner,
    deepest,
    isPythagorean = false;

  for (outer = 0; outer < length; outer++) {
    for (inner = outer + 1; inner < length; inner++) {
      for (deepest = inner + 1; deepest < length; deepest++) {
        isPythagorean = checkPythagorean(arr, outer, inner, deepest);
        if (isPythagorean) {
          console.log(
            "Three elements are: ",
            arr[outer],
            arr[inner],
            arr[deepest]
          );
          return;
        }
      }
    }
  }
  console.log("sum does not exist");
}

//using sort- Time complexity O(n^2)
//time for sorting is O(nlogn) and time complexity for finding sum is O(n) for array of n elements
//i.e n*O(n) = O(n^2)
//So the time complexity becomes O(n^2) and space complexity O(1)
function findPyhtagoreanTriplet2(arr){
  let length = arr.length;
  let index, left = 0, right;
  let isSumEqual, sum;

  arr.sort();

  for(index = 0; index < length; index++){
    arr[index] = getSquare(arr[index]);
  };


  //complexity of below code is O(n^2)
  for(index = length-1; index >= 2; index--){
    left = 0;
    right = index - 1;
    while(left < right){
      isSumEqual = checkSum(arr[left], arr[right], arr[index]);
      sum = arr[left] + arr[right];
      if(isSumEqual){
        console.log(
          "Three elements are: ",
          arr[left],
          arr[right],
          arr[index]
        );
        return;
      }else if(sum < arr[index]){
        left++;
      }else{
        right--;
      }
    }
  }
  console.log("sum does not exist");
}

let arr1 = [3, 1, 4, 6, 5];
let arr2 = [10, 4, 6, 12, 5];
findPyhtagoreanTriplet2(arr1);
