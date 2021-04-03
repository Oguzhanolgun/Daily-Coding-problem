// 1. Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const twoSum = (array, sum) => {
  const hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  const total = results.map((el) => el.reduce((acc, cur) => acc + cur));
  const isEqualSum = total.some((el) => el === sum);
  return isEqualSum;
};
console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50)); //true
console.log(twoSum([10, 15, 3, 7], 17)); //true
console.log(twoSum([10, 15, 3, 7], 21)); //true

// 2. Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the
//  new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
