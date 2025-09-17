const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

<<<<<<< Updated upstream
// Functions
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function containsValue(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
function squareArray(arr) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i] * arr[i];
  }
  return newArr;
}
function mergeArrays(arr1, arr2) {
  let newArr = [];
  let index = 0;

  for (let i = 0; i < getLength(arr1); i++) {
    newArr[index++] = arr1[i];
  }

  for (let j = 0; j < getLength(arr2); j++) {
    newArr[index++] = arr2[j];
  }

  return newArr;
}
=======
// ---------------- Functions ----------------
>>>>>>> Stashed changes

// 1. Add number
function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }
  newArr[getLength(arr)] = num; // push
  return newArr;
}

// 2. Remove last
function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

// 3. Get first
function getFirst(arr) {
  return arr[0];
}

// 4. Get index
function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// 5. Get length (without .length)
function getLength(arr) {
  let count = 0;
  for (let i in arr) {
<<<<<<< Updated upstream
    // using for..each loop to count
=======
>>>>>>> Stashed changes
    count++;
  }
  return count;
}

// 6. Reverse array
function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[i] = arr[len - 1 - i];
  }
  return newArr;
}

// 7. Get even numbers
function getEvens(arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

// 8. Sum of array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

// 9. Join words into sentence
function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) {
      sentence += " ";
    }
  }
  return sentence;
}

// 10. Remove duplicates
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

<<<<<<< Updated upstream
// Show result helper
=======
// 11. Find maximum
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 12. Find minimum
function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < getLength(arr); i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// 13. Check if value exists
function containsValue(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// 14. Square each element
function squareArray(arr) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i] * arr[i];
  }
  return newArr;
}

// 15. Merge two arrays
function mergeArrays(arr1, arr2) {
  let newArr = [];
  let index = 0;
  for (let i = 0; i < getLength(arr1); i++) {
    newArr[index++] = arr1[i];
  }
  for (let j = 0; j < getLength(arr2); j++) {
    newArr[index++] = arr2[j];
  }
  return newArr;
}

// ---------------- Helper ----------------
>>>>>>> Stashed changes
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(
    input
  )}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// ---------------- Buttons ----------------
function createButtons() {
  const buttons = [
    ["Add number to array", () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array")],
    ["Remove last element", () => showResult(numbers, removeLast(numbers), "Removed last element")],
    ["Get first element", () => showResult(numbers, getFirst(numbers), "Got first element")],
    ["Get index of value 5", () => showResult(numbers, getIndex(numbers, 5), "Got index of 5")],
    ["Get array length (no .length)", () => showResult(numbers, getLength(numbers), "Counted elements without .length")],
    ["Reverse array", () => showResult(numbers, reverseArray(numbers), "Reversed the array")],
    ["Get even numbers", () => showResult(numbers, getEvens(numbers), "Filtered even numbers")],
    ["Sum of array", () => showResult(numbers, sumArray(numbers), "Summed all numbers")],
    ["Join words", () => showResult(words, joinWords(words), "Joined words into a sentence")],
    ["Remove duplicates", () => showResult([1,2,2,3,3,4,4,4,4,3,5,6,7,8], removeDuplicates([1,2,2,3,3,4,4,4,4,3,5,6,7,8]), "Removed duplicates")],
    ["Get max value", () => showResult(numbers, getMax(numbers), "Found maximum value in array")],
    ["Get min value", () => showResult(numbers, getMin(numbers), "Found minimum value in array")],
    ["Check if array contains 7", () => showResult(numbers, containsValue(numbers, 7), "Checked if value exists in array")],
    ["Square each element", () => showResult(numbers, squareArray(numbers), "Squared each element in array")],
    ["Merge numbers and [10, 20, 30]", () => showResult(numbers, mergeArrays(numbers, [10,20,30]), "Merged two arrays")]
  ];

<<<<<<< Updated upstream
// 1. Add number
const btn1 = document.createElement("button");
btn1.innerText = "Add number to array";
btn1.onclick = () =>
  showResult(numbers, addNumber(numbers, 6), "Added number to end of array");
buttonsContainer.appendChild(btn1);

// 2. Remove last
const btn2 = document.createElement("button");
btn2.innerText = "Remove last element";
btn2.onclick = () =>
  showResult(numbers, removeLast(numbers), "Removed last element");
buttonsContainer.appendChild(btn2);

// 3. Get first
const btn3 = document.createElement("button");
btn3.innerText = "Get first element";
btn3.onclick = () =>
  showResult(numbers, getFirst(numbers), "Got first element");
buttonsContainer.appendChild(btn3);

// 4. Get index
const btn4 = document.createElement("button");
btn4.innerText = "Get index of value 5";
btn4.onclick = () =>
  showResult(numbers, getIndex(numbers, 5), "Got index of 5");
buttonsContainer.appendChild(btn4);

// 5. Get length
const btn5 = document.createElement("button");
btn5.innerText = "Get array length (no .length)";
btn5.onclick = () =>
  showResult(numbers, getLength(numbers), "Counted elements without .length");
buttonsContainer.appendChild(btn5);

// 6. Reverse array
const btn6 = document.createElement("button");
btn6.innerText = "Reverse array";
btn6.onclick = () =>
  showResult(numbers, reverseArray(numbers), "Reversed the array");
buttonsContainer.appendChild(btn6);

// 7. Get evens
const btn7 = document.createElement("button");
btn7.innerText = "Get even numbers";
btn7.onclick = () =>
  showResult(numbers, getEvens(numbers), "Filtered even numbers");
buttonsContainer.appendChild(btn7);

// 8. Sum of array
const btn8 = document.createElement("button");
btn8.innerText = "Sum of array";
btn8.onclick = () =>
  showResult(numbers, sumArray(numbers), "Summed all numbers");
buttonsContainer.appendChild(btn8);

// 9. Join words
const btn9 = document.createElement("button");
btn9.innerText = "Join words";
btn9.onclick = () =>
  showResult(words, joinWords(words), "Joined words into a sentence");
buttonsContainer.appendChild(btn9);

// 10. Remove duplicates
const btn10 = document.createElement("button");
btn10.innerText = "Remove duplicates";
btn10.onclick = () =>
  showResult(
    [1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8],
    removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8]),
    "Removed duplicates"
  );
buttonsContainer.appendChild(btn10);
// 11. Get max
const btn11 = document.createElement("button");
btn11.innerText = "Get max value";
btn11.onclick = () =>
  showResult(numbers, getMax(numbers), "Found maximum value in array");
buttonsContainer.appendChild(btn11);

// 12. Get min
const btn12 = document.createElement("button");
btn12.innerText = "Get min value";
btn12.onclick = () =>
  showResult(numbers, getMin(numbers), "Found minimum value in array");
buttonsContainer.appendChild(btn12);

// 13. Contains value
const btn13 = document.createElement("button");
btn13.innerText = "Check if array contains 7";
btn13.onclick = () =>
  showResult(
    numbers,
    containsValue(numbers, 7),
    "Checked if value exists in array"
  );
buttonsContainer.appendChild(btn13);

// 14. Square array
const btn14 = document.createElement("button");
btn14.innerText = "Square each element";
btn14.onclick = () =>
  showResult(numbers, squareArray(numbers), "Squared each element in array");
buttonsContainer.appendChild(btn14);

// 15. Merge arrays
const btn15 = document.createElement("button");
btn15.innerText = "Merge numbers and [10, 20, 30]";
btn15.onclick = () =>
  showResult(numbers, mergeArrays(numbers, [10, 20, 30]), "Merged two arrays");
buttonsContainer.appendChild(btn15);
=======
  buttons.forEach(([text, handler]) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = handler;
    buttonsContainer.appendChild(btn);
  });
}

// Initialize
createButtons();
>>>>>>> Stashed changes
