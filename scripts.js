// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const userDropdown = document.getElementById('retention-dropdown');
    const proPriceElement = document.getElementById('pro-price');
    const userCountPro = document.getElementById('rotation-count-days');
    const cards = document.querySelectorAll('.card');

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
