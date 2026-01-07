const numbers = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 0, 5];
const words = ["Hi", "it's", "me", "Umar"];

const outputDiv = document.getElementById("output");
const explanationDiv = document.getElementById("explanation");
const buttonsContainer = document.getElementById("buttons-container");

// ---------------- Functions ----------------

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
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(
    input
  )}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// ---------------- Buttons ----------------
function createButtons() {
  const buttons = [
    [
      "Add number to array",
      () =>
        showResult(
          numbers,
          addNumber(numbers, 6),
          "Added number to end of array"
        ),
    ],
    [
      "Remove last element",
      () => showResult(numbers, removeLast(numbers), "Removed last element"),
    ],
    [
      "Get first element",
      () => showResult(numbers, getFirst(numbers), "Got first element"),
    ],
    [
      "Get index of value 5",
      () => showResult(numbers, getIndex(numbers, 5), "Got index of 5"),
    ],
    [
      "Get array length (no .length)",
      () =>
        showResult(
          numbers,
          getLength(numbers),
          "Counted elements without .length"
        ),
    ],
    [
      "Reverse array",
      () => showResult(numbers, reverseArray(numbers), "Reversed the array"),
    ],
    [
      "Get even numbers",
      () => showResult(numbers, getEvens(numbers), "Filtered even numbers"),
    ],
    [
      "Sum of array",
      () => showResult(numbers, sumArray(numbers), "Summed all numbers"),
    ],
    [
      "Join words",
      () => showResult(words, joinWords(words), "Joined words into a sentence"),
    ],
    [
      "Remove duplicates",
      () =>
        showResult(
          [1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8],
          removeDuplicates([1, 2, 2, 3, 3, 4, 4, 4, 4, 3, 5, 6, 7, 8]),
          "Removed duplicates"
        ),
    ],
    [
      "Get max value",
      () =>
        showResult(numbers, getMax(numbers), "Found maximum value in array"),
    ],
    [
      "Get min value",
      () =>
        showResult(numbers, getMin(numbers), "Found minimum value in array"),
    ],
    [
      "Check if array contains 7",
      () =>
        showResult(
          numbers,
          containsValue(numbers, 7),
          "Checked if value exists in array"
        ),
    ],
    [
      "Square each element",
      () =>
        showResult(
          numbers,
          squareArray(numbers),
          "Squared each element in array"
        ),
    ],
    [
      "Merge numbers and [10, 20, 30]",
      () =>
        showResult(
          numbers,
          mergeArrays(numbers, [10, 20, 30]),
          "Merged two arrays"
        ),
    ],
  ];

  buttons.forEach(([text, handler]) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = handler;
    buttonsContainer.appendChild(btn);
  });
}

// Initialize
createButtons();
