//Given a list of n-1 integers and the integers are in the range of 1 to n
//No duplicates in the list, find the missing integer

//using sort - Time complexity O(nlogn) space complexity O(1)
function findMissingNumber(arr, range){
  let length = arr.length;
  arr.sort(); //O(nlogn)
  let index;
  for(index = 0; index < length-1; index++){  //O(n)
    if(arr[index+1] !== arr[index] + 1){
      return arr[index] + 1;
    }
  };
}

//using hash- Time & space complexity O(n) 
function findMissingNumber1(arr, range){
  let length = arr.length;
  let map = Array.from({length: range}).fill(0);
  let index;

  for(index=0; index<length; index++){
    map[arr[index]-1]++;  //because index starts from 0 but out element starts from 1 so we are mapping value 1 to array index 0 of map
  }

  for(index = 0; index < range; index++){
    if(!map[index]){
      return index+1;
    }
  }
}

//using summation formaula- Time complexity O(n) Space complexity O(1)
//calculating sum of n number = (n*(n+1))/2
function findMissingNumber2(arr, range){
  const sumOfRangeValues = (range * (range+1))/2;
  let index, sumOfArrayValues = 0;
  for(index=0; index<arr.length; index++){
    sumOfArrayValues += arr[index];
  }
  let missingNumber = sumOfRangeValues - sumOfArrayValues;
  return missingNumber;
}

//Using XOR- Time complexity O(n) Space complexity O(1)
function findMissingNumber3(arr, range){
  //find XOR of all array elements
  let index;
  let arrXOR, rangeXOR;
  for(index=0; index<arr.length; index++){
    arrXOR ^= arr[index];
  }
  //XOR of range values
  for(index=1; index<=range; index++){
    rangeXOR ^= index;
  }

  const missingNumber = arrXOR ^ rangeXOR;
  return missingNumber;
}

let range = 8;
let arr = [1, 2, 4, 6, 3, 7, 8]; //1,2,3,4,6,7,8
const missingNumber = findMissingNumber3(arr, range);
console.log("missing number is: ", missingNumber);
