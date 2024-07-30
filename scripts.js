// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const userDropdown = document.getElementById('retention-dropdown');
    const proPriceElement = document.getElementById('pro-price');
    const userCountPro = document.getElementById('rotation-count-days');
    const cards = document.querySelectorAll('.card');
    const calc = document.querySelectorAll('.calculator');

    // Price mapping
    const priceMap = {
        3: 0.4,
        7: 0.6,
        14: 0.75,
        30: 0.9
    };

    function updatePrice() {
        const selectedRetention = parseInt(userDropdown.value, 10);
        userCountPro.textContent = selectedRetention;
        const price = priceMap[selectedRetention] || 19; // Default price
        proPriceElement.innerHTML = `$${price}<span>/per Gb ingested</span>`;
    }

    function handleCardClick(event) {
        const selectedCard = event.currentTarget;

        // Remove 'selected' class from all cards
        cards.forEach(card => {
            card.classList.remove('selected');
        });

        // Add 'selected' class to the clicked card
        selectedCard.classList.add('selected');

        calc.forEach(card => {
            calc.classList.remove('selected');
        });

        // Add 'selected' class to the clicked card
        selectedCard.classList.add('selected');
    }

    userDropdown.addEventListener('change', updatePrice);

    // Add click event listeners to all tier cards
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    // Set the "Standard Tier" card as selected by default
    const defaultCard = document.querySelector('.card:nth-child(2)'); // Assumes Standard Tier is the second card
    if (defaultCard) {
        defaultCard.classList.add('selected');
    }

    // Initialize price on page load
    updatePrice();
});


// Calc scripts
document.addEventListener('DOMContentLoaded', () => {
    const logAmountSlider = document.getElementById('log-amount-slider');
    const logAmountValue = document.getElementById('log-amount-value');
    const retentionDropdown = document.getElementById('retention-dropdown');
    const usersDropdown = document.getElementById('users-dropdown');
    const totalCostElement = document.getElementById('total-cost');

    // Price mapping based on retention days
    const priceMap = {
        3: 0.4,
        7: 0.6,
        14: 0.75,
        30: 0.9
    };

    function updateCost() {
        const logAmount = parseFloat(logAmountValue.value);
        const retentionDays = parseInt(retentionDropdown.value, 10);
        const users = parseInt(usersDropdown.value, 10);

        const logPrice = priceMap[retentionDays] || 0.4; // Default price
        const totalCost = (logAmount * logPrice * 30) + 250 + (users * 1.2);
        totalCostElement.textContent = totalCost.toFixed(2);
    }

    // Sync slider and number input
    logAmountSlider.addEventListener('input', () => {
        logAmountValue.value = logAmountSlider.value;
        updateCost();
    });

    logAmountValue.addEventListener('input', () => {
        logAmountSlider.value = logAmountValue.value;
        updateCost();
    });

    retentionDropdown.addEventListener('change', updateCost);
    usersDropdown.addEventListener('change', updateCost);

    // Initialize calculation
    updateCost();
});

