//Program to check if array contains duplicate value or not

//Using loops- Time complexity O(n^2) Space complexity O(1)
function findDuplicate(arr){
let n = arr.length;
let i, j;
for(i=0; i<n; i++){
  for(j=i+1; j<n; j++){
    if(arr[i] === arr[j]){
      console.log("duplicate");
      return;
    }
  }
}
console.log("No duplicate");
};

//using sort- time complexity is O(nlogn) for sorting space complexity O(1)
function findDuplicate1(arr){
  let n = arr.length;
  arr.sort();
  let i;
  for(i=0; i<n-1; i++){
    if(arr[i] === arr[i+1]){
      console.log("duplicate");
      return;
    }
  }
  console.log("No duplicate");
}

//using hashmap- time and space complexity O(n)
function findDuplicate2(arr){
  let map = new Map();
  let n = arr.length;
  let i;
  for(i=0; i<n; i++){
    if(map.has(arr[i])){
      console.log("duplicate");
      return;
    }else{
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log("Not Duplicate");
}

//using single pass- time complexity O(n) space complexity O(1)
function findDuplicate3(arr){
  let n = arr.length;
  let i;
  for(i=0; i<n; i++){
    if(arr[Math.abs(arr[i])] < 0){
      console.log("duplicate");
      return;
    }else{
      arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    }
  };
  console.log("No duplicate");
}

let arr = [3, 2, 1, 2, 2, 3];
let arr1=[1,2,3,4,5,6];
findDuplicate3(arr);
