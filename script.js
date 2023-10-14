// When the element with id 'btnClick' (our button) is clicked, the code inside the arrow function will run.
document.getElementById('btnClick').onclick = () => {

    // Define the costs of each item. These are constants because their values won't change.
    const burgerCost = 1;  // Each burger costs $1.
    const friesCost = 2;   // Each fries portion costs $2.
    const sodaCost = 2.5;  // Each soda costs $2.50.

    // Get the value the user entered for burgers, convert it to a floating-point number.
    // If the user didn't enter anything, or entered an invalid value, use 0 as a default.
    const burgers = parseFloat(document.getElementById('burgers').value) || 0;

    // Do the same for fries.
    const fries = parseFloat(document.getElementById('fries').value) || 0;

    // And for sodas.
    const sodas = parseFloat(document.getElementById('sodas').value) || 0;

    // Calculate the total cost based on the quantity of each item and their respective costs.
    const total = (burgers * burgerCost) + (fries * friesCost) + (sodas * sodaCost);

    // Get the element where we want to display the total cost (a <span> with id 'totalCost').
    const totalDisplay = document.getElementById('totalCost');

    // Update the text content of the totalDisplay element to show the calculated total.
    // We format the total to have exactly two decimal places (e.g., $5.50 instead of $5.5).
    totalDisplay.textContent = `$${total.toFixed(2)}`;

    // Get the h3 element that contains the total display. We'll show this element since it's initially hidden.
    const totalContainer = document.querySelector('h3');

    // Add the 'show' class to the h3 element to make it visible (as defined in our CSS).
    totalContainer.classList.add('show');
};
