// declare function
function addNumbers() {
  //reate variables firstNum, secondNum
  var firstNum = 9
  var secondNum = 14
//reassgn firstNum and secondNum
  firstNum = 3
  secondNum = 4

  // creates nums of two variables into array

  var nums = [firstNum, secondNum]

// creates variables that multiples of two variables
  var product = firstNum * secondNum
// creates variables that add two variables
  var sum = firstNum + secondNum
// creates variables that finds two variables
  var average = sum / nums.length
// print out the first part of nums, 2nd part of nums
  console.log(nums[0])
  console.log(nums[1])

  console.log(`The first number is ${num1} and the second number is ${num2}!`)
// return the variable
  return sum
}
