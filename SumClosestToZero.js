//Find sum of two elements from the array which is closest to zero

//brute force- Time complexity O(n^2) and space complexity O(1)
function closetSumEqualToZero(arr) {
  let length = arr.length;
  let outer,
    inner,
    sum,
    closestMinimumSum = Number.MAX_SAFE_INTEGER;
  let sumElement1, sumElement2;

  for (outer = 0; outer < length - 1; outer++) {
    for (inner = outer + 1; inner < length; inner++) {
      sum = Math.abs(arr[outer] + arr[inner]);
      if (sum < closestMinimumSum) {
        closestMinimumSum = sum;
        sumElement1 = arr[outer];
        sumElement2 = arr[inner];
      }
    }
  }
  console.log(
    "Closest sum:",
    closestMinimumSum,
    "of numbers:",
    sumElement1,
    sumElement2
  );
}

//using sort - Time complexity O(nlogn) and space complexity O(1)
function closetSumEqualToZero2(arr) {
  let length = arr.length;
  let left = 0,
    right = length - 1;
  let closestSum,
    positiveClosest = Number.MAX_SAFE_INTEGER,
    negativeClosest = Number.MIN_SAFE_INTEGER;
  arr.sort((a, b) => a - b);

  while (left < right) {
    closestSum = arr[left] + arr[right];
    if (closestSum > 0) {
      if (closestSum < positiveClosest) {
        positiveClosest = closestSum;
      }
      right--;
    } else if (closestSum < 0) {
      if (closestSum > negativeClosest) {
        negativeClosest = closestSum;
      }
      left++;
    } else {
      console.log(
        "Closest sum: ",
        arr[left] + arr[right],
        "of numbers:",
        left,
        right
      );
    }
  }
  closestSum =
    Math.abs(negativeClosest) < positiveClosest
      ? negativeClosest
      : positiveClosest;

  console.log("Closest sum: ", closestSum);
}

let arr = [1, 60, -10, 70, -80, 85];
closetSumEqualToZero2(arr);
