//Given an array of positive integers, all number occurs even times except one. Find the element with odd frequency.

//brute force time complexity O(n^2) space complexity O(1)
function findOddElementFrequency(arr){
  let inner, outer, counter = 0;
  let length = arr.length;
  for(outer=0; outer<length; outer++){
    counter = 0;
    for(inner=0; inner<length; inner++){
      if(arr[outer] === arr[inner]){
        counter++;
      }
    }
    if(counter % 2 !== 0){
      console.log("Odd frequency element is: ", arr[outer]);
      break;
    }
  }
}

//sorting Time complexity O(nlogn) and space complexity O(1)
function findOddElementFrequency1(arr){
  let length = arr.length;
  let index, counter = 1;

  arr.sort(); //O(nlogn)
  for(index=0; index<length; index++){
    if(arr[index] === arr[index+1]){
      counter++;
    }else{
      if(counter % 2 !== 0){
        console.log("Odd frequency element is: ", arr[index]);
        break;
      }else{
        counter = 1;
      }
    }
  }
}

//hashing- Time and space complexity O(n)
function getIncrementedValue(map, key){
  return (map.get(key) + 1);
}
function setKeyValue(map, key){
  map.set(key, getIncrementedValue(map, key));
}

function findOddElementFrequency2(arr){
  let length = arr.length;
  let map = new Map();
  let index;

  for(index=0; index<length; index++){
    if(map.has(arr[index])){
      setKeyValue(map, arr[index]);
    }else{
      map.set(arr[index], 1);
    }
  }

  for(let [key, value] of map){
    if(value % 2 !== 0){
      console.log("Odd frequency element is: ", key);
      break;
    }
  }
}

//Best solution
//using XOR time complexity O(n) and space complexity O(1)
// A XOR A = 0, so even occuring elements will be removed leaving behind the odd one
function findOddElementFrequency3(arr){
  let length = arr.length;
  let index, oddElement = 0;

  for(index = 0; index < length; index++){
    oddElement ^= arr[index];
  }
  console.log("Odd frequency element is: ", oddElement);
}

const arr = [1,2,3,2,3,1,3];
findOddElementFrequency3(arr);
