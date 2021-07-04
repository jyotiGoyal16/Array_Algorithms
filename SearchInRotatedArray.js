//Given a sorted array which is rotated by k elements. Find the index of the given element in the rotated array

//Using two pass- first find the pivot (this is index for which the next element is smaller than the current element)
//second, divide the array into two sub arrays and call binary search on them

//Time complexity O(logn) because we did binary search
//Space complexity O(1)
function binarySearch(arr, start, end, searchElement){
  if(start > end){
    return -1;
  }

  let mid = start + Math.floor((end-start)/2);
  if(arr[mid] === searchElement){
    return mid;
  }else if(arr[mid] > searchElement){
    return binarySearch(arr, start, mid-1, searchElement);
  }else{
    return binarySearch(arr, mid+1, end, searchElement);
  }
}

function findPivot(arr, start, end){
  if(start > end){
    return -1;
  }
  let mid = start + Math.floor((end-start)/2);
  if(arr[mid] >= arr[mid+1]){
    return mid;
  }else if(arr[mid-1] > arr[mid]){
    return mid-1;
  }else if(arr[start] > arr[mid]){
    return findPivot(arr, start, mid-1);
  }else{
    return findPivot(arr, mid+1, end);
  }
}

function searchInRotatedSortedArray(arr, searchElement){
  let length = arr.length;
  let startIndex = 0;
  let endIndex = length-1;
  let pivot = findPivot(arr, startIndex, endIndex);
  let foundIndex = binarySearch(arr, startIndex, pivot, searchElement);
  if(foundIndex !== -1){
    return foundIndex;
  }else{
    foundIndex = binarySearch(arr, pivot + 1, endIndex, searchElement);
    console.log(searchElement)
    return foundIndex;
  }
}

//Same approach as above, we just tweaked the binary search itself to solve this issue in one pass
//time complexity O(logn) Space complexity O(1)

function binarySearchInRotatedArray(arr, start, end, searchElement){
  if(start > end){
    return -1;
  }
  let mid = start + Math.floor((end-start)/2);
  console.log(mid)
  if(arr[mid] === searchElement){
    return mid;
  }else if(arr[start] <= arr[mid]){
    if(arr[mid] > searchElement && searchElement >= arr[start]){
      return binarySearchInRotatedArray(arr, start, mid-1, searchElement);
    }else{
      return binarySearchInRotatedArray(arr, mid+1, end, searchElement);
    }
  }else{
    if(arr[mid] < searchElement && searchElement <= arr[end]){
      return binarySearchInRotatedArray(arr, mid+1, end, searchElement);
    }else{
      return binarySearchInRotatedArray(arr, start, mid-1, searchElement);
    }
  }
}

let arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
let arr1 = [7, 1, 2, 3, 4, 5, 6];
let foundIndex = searchInRotatedSortedArray(arr1, 5);
let foundIndex2 = binarySearchInRotatedArray(arr, 0, arr.length-1, 5);
if(foundIndex2 === -1){
  console.log("Element not found");
}else{
  console.log("Element found at index: ", foundIndex2);
}
