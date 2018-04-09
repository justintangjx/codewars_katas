/* 
The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

#Note

If num is negative, ignore its sign and treat it as a positive value.
If nth is not positive, return -1.
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
*/

const findDigit = (num, nth) => {
  if (nth < 1) {
    return -1;
  }

  let revNumber = Math.abs(num)
    .toString()
    .split("")
    .reverse();

  if (nth > revNumber.length) {
    return 0;
  }

  return Number.parseInt(revNumber[nth - 1]);
};

module.exports = findDigit;
