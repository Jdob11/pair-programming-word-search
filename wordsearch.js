const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

 const verticalLetters = transpose(letters);
  const verticalJoin = verticalLetters.map(vls => vls.join(''));
  for (vl of verticalJoin) {
      if (vl.includes(word)) return true
  }

  return false;
}

module.exports = wordSearch

const transpose = function (matrix) {
  //create array to hold the final transposed arrays
  const transposedArray = [];
  //loop through the first array
  for (let row = 0; row < matrix[0].length; row++) {
    //create a temporary array to hold the transposed output
    const tempArray = [];
    //loop through each array element push opposite coordinate into tempArray
    for (let column = 0; column < matrix.length; column++) {
      tempArray.push(matrix[column][row]);
    }
    //push each new tempArray into the final transposedArray
    transposedArray.push(tempArray);
  }
  return transposedArray;
};