/*
make a function that checks if 2 nums from the array adds up to 
a target
*/

function hasTargetSum(array, target) {
  // Write your algorithm here
 for (let i = 0; i< array.length; i++){
  const duo = target - array [i]
    for (let j = i + 1; j< array.length; j++){
      if (array[j] === duo) return true
    }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here'
  runtime: O(n^2)
*/

/*  if (array === [3, 8, 12, 4, 11, 7]){
    target = 10
    function 

  }
  Add your pseudocode here
  check if it is a given array,
    run a function if it is the given array()
      checks the numbers one by one to see if any returns the chosen sum(target)
        returns true if sum is there
      

*/

/*
  Add written explanation of your solution here
  my solution is a function which loops through the 
  array and works through it backwards subtracting the pulled 
  array value from the target and checking if another "Different"
  array element will be equals to the subtracted value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
