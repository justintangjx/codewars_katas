/* Your task is to make a function that can take any non-negative integer 
as a argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number. */

const sortDigitsInDescendingOrder = digits => {
  if (digits === undefined) {
    return 0;
  }
  let newArr = digits.toString().split("");

  newArr.sort(function(a, b) {
    return b - a;
  });

  return parseInt(newArr.join(""));
};

module.exports = sortDigitsInDescendingOrder;
