//Given an array with n+2 elements, all elements in the range 1 to n and all elements occur only once except two numbers which occur twice. 
//Find those two repeating numbers.

//brute force(nested loop) Time complexity O(n^2) and space complexity O(1)
function printRepeatedElements(arr){
  let length = arr.length;
  let outer, inner;

  console.log("Repeated element: ");
  for(outer = 0; outer < length; outer++){
    for(inner = outer + 1; inner < length; inner++){
      if(arr[outer] === arr[inner]){
        console.log(arr[outer]);
      }
    }
  }
}

//using sort - time complexity O(nlogn) and space complexity O(1)
function printRepeatedElements1(arr){
  let length = arr.length;
  arr.sort();
  let index;

  console.log("Repeating elements: ");
  for(index = 0; index < length; index++){
    if(arr[index] === arr[index+1]){
      console.log(arr[index]);
    }
  }
}

//using hashing- Time and space complexity O(n)
function printRepeatedElements2(arr){
  let length = arr.length;
  let count = Array.from({length}).fill(0);
  let index;

  for(index = 0; index < length; index++){
    count[arr[index]]++;
  };

  console.log("Repeating elements: ");
  for(let key in count){
    if(count[key] === 2 ){
      console.log(key);
    }
  }
}

let arr = [4, 2, 4, 5, 2, 3, 1];
printRepeatedElements2(arr);
