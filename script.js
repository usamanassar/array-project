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

  //push
  newArr[getLength(arr)] = num;
  return newArr;
}

// 2. Remove last
function removeLast(arr) {
  let newArr = [];
  let len = getLength(arr);
  for (let i = 0; i < len - 1; i++) {
    newArr[i] = arr[i]; // use pop() to remove last
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
  return -1; // if not found
}

// 5. Get length (no .length)
function getLength(arr) {
  let count = 0;
  for (let i in arr) {
    // using for..each loop to count
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
      sentence += " "; //join()
    }
  }
  return sentence;
}

// 10. Remove duplicates
function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // check if arr[i] already exists in newArr
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }

    // if not found, add it
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}

// Show result helper
function showResult(input, result, explanation) {
  outputDiv.innerHTML = `<strong>Input:</strong> ${JSON.stringify(
    input
  )}<br><strong>Result:</strong> ${JSON.stringify(result)}`;
  explanationDiv.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
}

// --- Create Buttons ---

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

// 11. Flatten array
function flattenArray(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

const nestedArray = [1, [2, [3, [4]]]];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

// 12. Common elements in two arrays
function findCommon(a, b) {
  const res = [];
  const visited = new Array(b.length).fill(false);

  // For every element in a[] check if we have
  // matching not yet visited element in b[].
  // If yes, add the item to result.
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] && !visited[j]) {
        res.push(a[i]);
        visited[j] = true;
        break;
      }
    }
  }
  return res;
}

// Driver code
const a = [1, 2, 1, 3, 1];
const b = [3, 1, 3, 4, 1];

const result = findCommon(a, b);
console.log(result.join(" "));

//13. Distinct elements in an array
// Create an array with duplicate elements
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];

// Create an empty array
const distinctArr = [];

// Using forEach() and includes() method
// to get the unique elements
arr.forEach((num) => {
  if (!distinctArr.includes(num)) {
    distinctArr.push(num);
  }
});

console.log(distinctArr);

//14. Merge two sorted arrays
const a1 = [1, 3, 5, 7];
const a2 = [2, 4, 6, 8];
let res = a1.concat(a2).sort((a, b) => a - b);

console.log(res);

//15. Count frequency of elements in an array
const b1 = [4, 2, 3, 4, 3, 2, 4, 1, 3, 2];
let res2 = new Map();
a1.forEach((e) => {
  res.set(e, (res.get(e) || 0) + 1);
});
console.log(Object.fromEntries(res));
