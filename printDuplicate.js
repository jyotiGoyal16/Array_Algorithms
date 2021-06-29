//Print duplicates in an array

//using hashmap- time and space complexity O(n)
function printDuplicate(arr){
  let map = new Map();
  let n = arr.length;
  let i, flag = false;
  for(i=0; i<n; i++){
    if(map.has(arr[i]))
      map.set(arr[i], 1);
    else
      map.set(arr[i], 0);
  }
  for(let [key, value] of map){
    if(value === 1){
      console.log(key);
      flag = true;
    }
  }
  if(!flag)
    console.log("No duplicate");
}
