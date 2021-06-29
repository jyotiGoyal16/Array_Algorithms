//Print the element which occurs maximum number of times in the array

//using nested loops- time complexity O(n^2) space complexity O(1)
function printFrequency(arr){
  let n = arr.length;
  let max = 0, counter = 0;
  let i, j, element;

  for(i=0; i<n; i++){
    counter = 0;
    for(j=0; j<n; j++){
      if(arr[i] === arr[j])
        counter++;
    }
    if(counter > max){
      max = counter;
      element = arr[i];
    }
  }
  if(max > 1){
    console.log(`Element ${element} has frequency ${max} in array`);
  }else{
    console.log("all elements in the array are unique");
  }
}

//using sort- time complexity O(nlogn) space complexity O(1)
function printFrequency1(arr){
  arr.sort();
  let n = arr.length;
  let i, counter = 0, max = 0, element;
  
  for(i=0; i<n-1; i++){
    if(arr[i] === arr[i+1])
      counter++
    else{
      if(counter > max){
        max = counter;
        element = arr[i];
      }
    }
  }
  if(max > 1)
    console.log(`Element ${element} has frequency ${max} in array`);
  else
    console.log("all elements in the array are unique");
}

//using hashmap- time & space complexity O(n)
function printFrequency2(arr){
  let n = arr.length;
  let map = new Map();
  let i, max = 0, element;

  for(i=0; i<n; i++){
    if(map.has(arr[i]))
      map.set(arr[i], map.get(arr[i]) + 1);
    else
      map.set(arr[i], 1);
  }

  for(let [key, value] of map){
    if(value > max){
      max = value;
      element = key;
    }
  }

  if(max > 1)
    console.log(`Element ${element} has frequency ${max} in array`);
  else
    console.log("all elements in the array are unique");
}

let arr = [3, 2, 1, 2, 2, 3]; //[1, 2, 2, 2, 3, 3]
let arr1=[1,2,3,4,5,6];
printFrequency2(arr);
