/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = string => {
  let newArray = [];
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 96) {
      let switchCharCode = 122 - (string.charCodeAt(i) - 97);
      let x = String.fromCharCode(switchCharCode);
      newArray.push(x);
    } else {
      newArray.push(String.fromCharCode(32));
    }
  }

  return newArray.join("");
};

module.exports = decodeMessage;
// let newString = string.split("");
//   const alphabetOrder = "abcdefghijklmnopqrstuvwxyz";
//   const oldOrder = alphabetOrder.split("");
//   const revOrder = alphabetOrder.split("").reverse();
//   function sortOrder(letter) {
//     for (var i = 0; i < oldOrder.length; i++) {
//       if (letter === oldOrder[i]) {
//         return revOrder[i];
//       } else if (letter === " ") {
//         return " ";
//       }
//     }
//   }

//   return newString.map(sortOrder).join("");
