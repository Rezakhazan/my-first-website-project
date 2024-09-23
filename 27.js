function randomGeneratorNumbers() {
  let randArray = Array(20).fill(0);

  for (let i = 0; i < randArray.length; i++) {
    let rand = Math.floor(Math.random() * 5);
    randArray[i] = rand;
  }
  return randArray;
}

function processArray(randArrayResult) {
  let shadowArray = Array(0).fill(0);
  for (let i = 0; i < randArrayResult.length; i++) {
    let isDuplicate = checkToDuplicate(randArrayResult[i], shadowArray);
    if (isDuplicate == false) {
      shadowArray.push(randArrayResult[i]);
    }
  }
  return shadowArray;
}

function checkToDuplicate(number, shadowArray) {
  for (let i = 0; i < shadowArray.length; i++) {
    if (number == shadowArray[i]) {
      return true;
    }
  }
  return false;
}

function printArray(arrayResult) {
  for (let i = 0; i < arrayResult.length; i++) {
    document.write(arrayResult[i] + ", ");
  }
  document.write("</br>");
}

function main() {
  let randArrayResult = randomGeneratorNumbers();
  printArray(randArrayResult);

  let shadowArrayResult = processArray(randArrayResult);
  printArray(shadowArrayResult);
}
