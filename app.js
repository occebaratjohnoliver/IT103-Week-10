
/*
 * app.js - Interactive Webpage
 * Author: John Oliver Ebarat
 * Date: November 11, 2026
 */

// Get the HTML elements
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

// Listen for button click
submitBtn.addEventListener('click', () => {

    // Get the user's input
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    // Validate the inputs
    if (name === '' || ageInput.value.trim() === '') {
        output.textContent = 'Please fill in both fields.';
        output.classList.add('error');
        return;
    }

    if (age <= 0 || !Number.isInteger(age)) {
        output.textContent = 'Please enter a valid age.';
        output.classList.add('error');
        return;
    }

    // Display the result
    output.classList.remove('error');
    output.textContent = `Hello, ${name}! You are ${age} years old. Welcome to IT103!`;

});
