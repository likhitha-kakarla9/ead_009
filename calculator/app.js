const display = document.getElementById("display");

function appendToDisplay(input) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = display.value.slice(-1);

  // Prevent multiple operators in a row
  if (operators.includes(input) && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
