const display = document.getElementById("display");
const total = document.getElementById("result");

let currentInput = "";

function input(val) {
  if(val === "") {
    currentInput = "";
    display.textContent = "0";
    return;
  }
  currentInput += val;
  display.textContent = currentInput;
}

function factorialCalculator(num) {
  let result = num;
  for(let i = 1; i < num; i++) {
    result = result*(num-i);
  }
  return result
}

function calculate() {
  const factorialResult = factorialCalculator(currentInput);
  total.textContent = `${factorialResult}`;
}

