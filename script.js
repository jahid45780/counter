// document.addEventListener("DOMContentLoaded", () => {
//     let counter = 0;

//     const counterInput = document.getElementById('counterInput');
//     const displayCounter = document.getElementById('displayCounter');
//     const incrementBtn = document.getElementById('incrementBtn');
//     const decrementBtn = document.getElementById('decrementBtn');
//     const resetBtn = document.getElementById('resetBtn');
//     const submitBtn = document.getElementById('submitBtn');

//     function updateDisplay() {
//         displayCounter.textContent = `Current Counter: ${counter}`;
//     }

//     incrementBtn.addEventListener('click', () => {
//         counter++;
//         updateDisplay();
//     });

//     decrementBtn.addEventListener('click', () => {
//         if (counter > 0) {
//             counter--;
//         }
//         updateDisplay();
//     });

//     resetBtn.addEventListener('click', () => {
//         counter = 0;
//         counterInput.value = 0;
//         updateDisplay();
//     });

//     submitBtn.addEventListener('click', () => {
//         const inputValue = parseInt(counterInput.value, 10);
//         if (!isNaN(inputValue) && inputValue >= 0) {
//             counter = inputValue;
//             updateDisplay();
//         } else {
//             alert("Please enter a valid non-negative number.");
//         }
//     });
// });

let counter = 0
const displayCounter = document.getElementById('displayCounter');
function updateDisplay() {
    displayCounter.innerText = `Current Counter: ${counter}`;
}
const mainFunc = (type) => {
    if (type == "increment") {
        counter++;
        updateDisplay();
    }
    else if (type == "decrement" && counter === 0) {
        return;
    }
    else if (type == "decrement") {
        counter--;
        updateDisplay();
    }
    else if (type == "reset") {
        counter = 0
        updateDisplay();
    }
    else if (type == "valueAdd") {
        const counterInput = parseFloat(document.getElementById('counterInput').value);
        if (counterInput === 0) {
            alert("Please provide a positive value!!")
        }
        else if (counterInput >= 0) {
            counter += counterInput;
        }
        else {
            alert(`${counterInput} is a negative Number!! It's not allowed.`)
        }
        document.getElementById('counterInput').value = 0;
        updateDisplay();
    }
}