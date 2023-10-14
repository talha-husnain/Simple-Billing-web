document.getElementById('btnClick').onclick = () => {
    const burgerCost = 1;
    const friesCost = 2;
    const sodaCost = 2.5;

    const burgers = parseFloat(document.getElementById('burgers').value) || 0;
    const fries = parseFloat(document.getElementById('fries').value) || 0;
    const sodas = parseFloat(document.getElementById('sodas').value) || 0;

    const total = (burgers * burgerCost) + (fries * friesCost) + (sodas * sodaCost);

    const totalDisplay = document.getElementById('totalCost');
    totalDisplay.textContent = `$${total.toFixed(2)}`;

    const totalContainer = document.querySelector('h3');
    totalContainer.classList.add('show');
};
