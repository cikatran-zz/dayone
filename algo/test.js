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

const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "test_cases");

const readFileLines = (filename) =>
  fs
    .readFileSync(filename)
    .toString("UTF8")
    .split("\n")
    .map((item) => parseInt(item, 10));

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    const filePath = path.join(directoryPath, file);
    const arr = readFileLines(filePath);
    const result = balancedSum(arr);
    result > 0
      ? console.log(`The array in ${file} is balanced at: `, result)
      : console.log(`The array in ${file} is not balanced`);
  });
});

// console.log(balancedSum([1, 2, 3, 6]));
