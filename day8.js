const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// Functions

function addNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < getLength(arr); i++) {
    newArr[i] = arr[i];
  }
  newArr[getLength(arr)] = num; // push
  return newArr;
}

function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

function getFirst(arr) {
  return arr[0];
}

function getIndex(arr, value) {
  for (let i = 0; i < getLength(arr); i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function getLength(arr) {
  let count = 0;
  for (let i in arr) count++;
  return count;
}

function reverseArray(arr) {
  let len = getLength(arr);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[i] = arr[len - 1 - i];
  }
  return newArr;
}

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

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < getLength(arr); i++) {
    sum += arr[i];
  }
  return sum;
}

function joinWords(arr) {
  let sentence = "";
  for (let i = 0; i < getLength(arr); i++) {
    sentence += arr[i];
    if (i < getLength(arr) - 1) sentence += " ";
  }
  return sentence;
}

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
    if (!found) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

// --- NEW FUNCTIONS ---

// 11. Sort array (ascending)
function sortArray(arr) {
  let newArr = [...arr]; // copy
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
}

// 12. Add all numbers (same as sumArray but kept separate)
function addAll(arr) {
  return sumArray(arr);
}

// 13. Subtract all numbers (left to right)
function subtractAll(arr) {
  if (arr.length === 0) return 0;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  return result;
}

// 14. Divide all numbers (left to right)
function divideAll(arr) {
  if (arr.length === 0) return 0;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result /= arr[i];
    }
  }
  return result;
}

// 15. Insert & Delete (example: insert 99 at index 2, delete index 4)
function insertionDeletion(arr) {
  let newArr = [...arr];
  // Insert 99 at index 2
  for (let i = newArr.length; i > 2; i--) {
    newArr[i] = newArr[i - 1];
  }
  newArr[2] = 99;

  // Delete element at index 4
  for (let i = 4; i < newArr.length - 1; i++) {
    newArr[i] = newArr[i + 1];
  }
  newArr.length = newArr.length - 1;
  return newArr;
}

// Helper to display result
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(input)}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// --- Create Buttons (Existing) ---
const btn1 = document.createElement("button");
btn1.innerText = "Add number to array";
btn1.onclick = () => showResult(numbers, addNumber(numbers, 6), "Added number to end of array");
buttonsContainer.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerText = "Remove last element";
btn2.onclick = () => showResult(numbers, removeLast(numbers), "Removed last element");
buttonsContainer.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.innerText = "Get first element";
btn3.onclick = () => showResult(numbers, getFirst(numbers), "Got first element");
buttonsContainer.appendChild(btn3);

const btn4 = document.createElement("button");
btn4.innerText = "Get index of value 5";
btn4.onclick = () => showResult(numbers, getIndex(numbers, 5), "Got index of 5");
buttonsContainer.appendChild(btn4);

const btn5 = document.createElement("button");
btn5.innerText = "Get array length (no .length)";
btn5.onclick = () => showResult(numbers, getLength(numbers), "Counted elements without .length");
buttonsContainer.appendChild(btn5);

const btn6 = document.createElement("button");
btn6.innerText = "Reverse array";
btn6.onclick = () => showResult(numbers, reverseArray(numbers), "Reversed the array");
buttonsContainer.appendChild(btn6);

const btn7 = document.createElement("button");
btn7.innerText = "Get even numbers";
btn7.onclick = () => showResult(numbers, getEvens(numbers), "Filtered even numbers");
buttonsContainer.appendChild(btn7);

const btn8 = document.createElement("button");
btn8.innerText = "Sum of array";
btn8.onclick = () => showResult(numbers, sumArray(numbers), "Summed all numbers");
buttonsContainer.appendChild(btn8);

const btn9 = document.createElement("button");
btn9.innerText = "Join words";
btn9.onclick = () => showResult(words, joinWords(words), "Joined words into a sentence");
buttonsContainer.appendChild(btn9);

const btn10 = document.createElement("button");
btn10.innerText = "Remove duplicates";
btn10.onclick = () => showResult(numbers, removeDuplicates(numbers), "Removed duplicates");
buttonsContainer.appendChild(btn10);

// --- NEW BUTTONS ---

// 11. Sort array
const btn11 = document.createElement("button");
btn11.innerText = "Sort array";
btn11.onclick = () => showResult(numbers, sortArray(numbers), "Sorted array in ascending order");
buttonsContainer.appendChild(btn11);

// 12. Add all numbers
const btn12 = document.createElement("button");
btn12.innerText = "Add all numbers";
btn12.onclick = () => showResult(numbers, addAll(numbers), "Added all numbers together");
buttonsContainer.appendChild(btn12);

// 13. Subtract numbers
const btn13 = document.createElement("button");
btn13.innerText = "Subtract numbers";
btn13.onclick = () => showResult(numbers, subtractAll(numbers), "Subtracted numbers from left to right");
buttonsContainer.appendChild(btn13);

// 14. Divide numbers
const btn14 = document.createElement("button");
btn14.innerText = "Divide numbers";
btn14.onclick = () => showResult(numbers, divideAll(numbers), "Divided numbers from left to right (ignores division by 0)");
buttonsContainer.appendChild(btn14);

// 15. Insert & Delete
const btn15 = document.createElement("button");
btn15.innerText = "Insert & Delete";
btn15.onclick = () =>
  showResult(numbers, insertionDeletion(numbers), "Inserted 99 at index 2 and deleted element at index 4");
buttonsContainer.appendChild(btn15);
