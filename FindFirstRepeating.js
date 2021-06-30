//Find the first repeating element in an array

//time complexity O(n^2) space complexity O(1)
function printFirstRepeating(arr){
  let n = arr.length, i, j;
  for(i=0; i<n-1; i++){
    for(j=i+1; j<n; j++){
      if(arr[i] === arr[j]){
        console.log("1st element duplicate is:", arr[i]);
        return;
      }
    }
  }
  console.log("no duplicates");
}

//Time and space complexity O(n)
function printFirstRepeating2(arr){
  let n = arr.length, i;
  let map = new Map();
  for(i=0; i<n; i++){
    if(map.has(arr[i])){
      map.set(arr[i], map.get(arr[i]) + 1);
    }else{
      map.set(arr[i], 1);
    }
  }
  for(i=0; i<n; i++){
    if(map.get(arr[i]) > 1){
      console.log("1st element duplicate is:", arr[i]);
        return;
    }
  }
  console.log("no duplicates");
}

let arr = [3, 2, 1, 2, 2, 3]; //[1, 2, 2, 2, 3, 3]
let arr1=[1,2,3,4,5,6];
printFirstRepeating(arr);
