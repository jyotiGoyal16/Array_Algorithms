//Remove duplicates from an array

//Using sorting- Time complexity O(nlogn) space complexity O(1)
function removeDuplicates(str){
  let n = str.length;
  let i, index = 0;
  str.sort();
  for(i=0; i<n; i++){
    if(str[i] !== str[i+1]){
      str[index++] = str[i];
    }
  }
  str.length = index
}

//using hash table- Time and space complexity O(n)
function removeDuplicates1(str){
  let n = str.length;
  let map = new Map();
  let i, index = 0;
  for(i=0; i<n; i++){
    if(!map.has(str[i])){
      map.set(str[i]);
      str[index++] = str[i];
    }
  }
  str.length = index;
}

const str = ['g', 'e', 'e', 'k', 's', 'f', 'k', 'e'];
const str2 = ['e', 'e', 'e'];
const str3 = ['a', 'b', 'c', 'd'];
removeDuplicates1(str);
console.log(str);
