//find two elements in the array such that their sum is equal to the given element K

//brute force nested loop
//time complexity O(n^2) space complexity O(1)
function searchSumPair(arr, sumValue){
  let length = arr.length;
  let outer, inner;

  for(outer = 0; outer < length; outer++){
    for(inner = outer + 1; inner < length; inner++){
      if(arr[outer] + arr[inner] === sumValue){
        console.log("Elements that give the required sum is: ", 
        arr[outer], 
        arr[inner]
        );
        return;
      }
    }
  }
  console.log("No Matching element found");
}

//using sort- Time complexity O(nlogn) space complexity O(1)
function searchSumPair2(arr, sumValue){
  let length = arr.length;
  let left = 0;
  let right = length-1;
  let sum;
  arr.sort();

  while(left < right){
    sum = arr[left] + arr[right];
    if(sum === sumValue){
      console.log("Elements that give the required sum is: ", 
        arr[left], 
        arr[right]
        );
        return;
    }else if(sum < sumValue)
      left++;
    else
      right--;
  }
  console.log("No Matching element found");
}

//using hashing- Time & space complexity O(n)
function searchSumPair3(arr, sumValue){
  let length = arr.length;
  let map = new Map();
  let index, value;

  for(index = 0; index < length; index++){
    if(!map.has(arr[index])){
      map.set(arr[index], arr[index]);
    }
    if(map.has(sumValue - arr[index])){
      value = map.get(sumValue - arr[index]);
      console.log("Elements that give the required sum is: ", 
        arr[index], 
        value
        );
        return;
    }
  }
  console.log("No Matching element found");
}

let arr = [1, 2, 7, 3, 6, 5]; //[1, 2, 3, 5, 6, 7]
let sumValue = 10;
searchSumPair3(arr, sumValue);
