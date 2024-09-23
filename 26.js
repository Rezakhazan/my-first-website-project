//------------------<< randomNumberGenerator >>------------------
function randomNumberGenerator() {
  let numArray = Array(20).fill(0);
  for (let i = 0; i < numArray.length; i++) {
    let rand = Math.floor(Math.random() * 100);
    numArray[i] = rand;
  }
  return numArray;
}

//------------------<< sortArrayNumbers >>------------------
function sortArrayNumbers(numArrayResult) {
  let temp = 0;
  for (let i = 0; i < numArrayResult.length; i++) {
    for (let j = i + 1; j < numArrayResult.length; j++) {
      if (numArrayResult[i] < numArrayResult[j]) {
        temp = numArrayResult[i];
        numArrayResult[i] = numArrayResult[j];
        numArrayResult[j] = temp;
      }
    }
  }
  return numArrayResult;
}

//------------------<< printArray >>------------------
function printArray(numArrayResult) {
  for (let i = 0; i < numArrayResult.length; i++) {
    document.write(numArrayResult[i] + ", ");
  }
  document.write("</br>");
}

//------------------<< main >>------------------
function main() {
  let numArrayResult = randomNumberGenerator();
  printArray(numArrayResult);
  let sortedNumArrayResult = sortArrayNumbers(numArrayResult);
  printArray(sortedNumArrayResult);
}
