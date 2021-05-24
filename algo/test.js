const balancedSum = (arr) => {
  let result;
  //init 2 cursors from start and end of the array
  let left = 0;
  let right = arr.length - 1;
  //init sum of 2 sides from with initial value is the first and the last of array
  let sum_left = arr[0];
  let sum_right = arr[arr.length - 1];

  //we will traverse 2 cursor and move the cursor forward from 2 sides based if it's sum less than the other side sum
  //then move the cursor to next element
  while (right - left > 1 && sum_left != sum_right) {
    console.log("left: ", left);
    console.log("right: ", right);
    console.log("sum_left: ", sum_left);
    console.log("sum_right: ", sum_right);
    if (sum_left < sum_right) {
      left++;
      sum_left += arr[left];
    } else if (sum_left > sum_right) {
      right--;
      sum_right += arr[right];
    }

    //Check if the array is balance then return pivot index.
    if (sum_left == sum_right && right - left == 2) {
      result = right - 1;
    }
  }
  //Return -1 when the array is not balanced
  return result ? result : -1;
};

console.log(balancedSum([1, 2, 3, 6]));
