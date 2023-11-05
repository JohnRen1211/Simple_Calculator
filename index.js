// Calculator js


// I get the display element
const display = document.querySelector(".display");
let periodAdded = false;

// Function to append a value to the display
function appendValue(value) {
    if (value === '.') {
        // Check if the current value in the display already ends with a period
        // or if the last character is not a number
        if (display.value.endsWith('.') || isNaN(display.value.slice(-1))) {
            return; // Ignore if period is already at the end or if the last character is not a number
        }
    }
    display.value += value;
}

// Function to evaluate and calculate the expression in the display
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
    periodAdded = false;
}

// Function to convert the displayed decimal value to binary
function convertToBinary() {
    const decimalValue = parseFloat(display.value);
    if (!isNaN(decimalValue)) {
        const binaryValue = decimalValue.toString(2);
        display.value = binaryValue.replace(/\.0+$/, "");
    }
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Memory operations
let memory = 0;

// Function to add the current value to memory
function addToMemory() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memory += currentValue;
    }
}

// Function to subtract the current value from memory
function subtractFromMemory() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
    }
}

// Function to clear the memory
function clearMemory() {
    memory = 0;
}

// Function to recall the value from memory and display it
function recallMemory() {
    display.value = memory.toString();
}

