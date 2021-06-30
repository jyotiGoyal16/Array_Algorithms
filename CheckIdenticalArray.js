//Given two arrays, check whether both have same set of numbers

//using nested loops(does not work for duplicate entries in array)
//Time complexity O(n^2) space complexity O(1)
function checkIdenticalArray(arr1, arr2){
  let n1 = arr1.length;
  let n2 = arr2.length;

  if(n1 !== n2){
    console.log("array is not identical");
    return;
  }
  let i, j, counter = 0;
  for(i=0; i<n1; i++){
    for(j=0; j<n2; j++){
      if(arr1[i] === arr2[j]){
        counter++;
        break;
      }
    }
  }
  if(counter === n1){
    console.log("array is identical");
  }else{
    console.log("array is not identical");
  }
}

//using sorting- time complexity O(nlogn) space complexity O(1)
function checkIdenticalArray2(arr1, arr2){
  let n1 = arr1.length;
  let n2 = arr2.length;

  if(n1 !== n2){
    console.log("array is not identical");
    return;
  }
  arr1.sort();
  arr2.sort();
  let i, p1 = 0, p2 = 0;
  for(i=0; i<n1; i++){
    if(arr1[p1++] !== arr2[p2++]){
      console.log("array is not identical");
      return;
    }
  }
  console.log("array is identical");
}

//using hash table - Time and space complexity O(n)
function checkIdenticalArray3(arr1, arr2){
  let n1 = arr1.length;
  let n2 = arr2.length;

  if(n1 !== n2){
    console.log("array is not identical");
    return;
  }

  let map = new Map();
  let i, value, flag = false;
  for(i=0; i<n1; i++){
    value = map.get(arr1[i]) ? map.get(arr1[i]) : 0;
    map.set(arr1[i], value + 1);
  }
  for(i=0; i<n2; i++){
    map.set(arr2[i], map.get(arr2[i]) - 1);
  }

  for(let value of map.values()){
    if(value !== 0){
      flag = true;
    }
  }
  if(flag)
    console.log("array is not identical");
  else
    console.log("array is identical");
}

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 2, 4, 1];

let arr3 = [2, 4, 2, 3, 3];
let arr4 = [2, 3, 4, 4, 3]
checkIdenticalArray(arr1, arr2);
