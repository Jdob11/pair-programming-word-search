const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
      if (reverseString(l).includes(word)) return true
      // include a check to see if backwards
  }
  // Flip this table similiar to matrix values on it's head
  const swap = verticalSwapper(letters);
  const verticalJoin = swap.map(ls => ls.join(''))
  for (l of verticalJoin) {
      if (l.includes(word)) return true
      if (reverseString(l).includes(word)) return true
      // include a check to see if backwards
  }
  return false;


}

module.exports = wordSearch

// One to do the logic of vertical to horizontal swap
const verticalSwapper = (array) => {
let swappedArray = [];
for (const keyArray in array) {
  for (const keyValue in array[keyArray]) {
    if(!swappedArray[keyValue]) {
      swappedArray[keyValue] = [];
    }
    swappedArray[keyValue][keyArray] = array[keyArray][keyValue];
  }
}
return swappedArray;
}

// One to reverse the current string Stretch
const reverseString = (string) => {
reverseArray = string.split("");
return reverseArray.reverse().join("")
};