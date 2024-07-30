// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const userDropdown = document.getElementById('retention-dropdown');
    const proPriceElement = document.getElementById('pro-price');
    const userCountPro = document.getElementById('rotation-count-days');

    // Price mapping
    const priceMap = {
        3: 0.4,
        7: 0.6,
        14: 0.75,
        30: 0.9
    };

    function updatePrice() {
        const selectedUsers = parseInt(userDropdown.value, 10);
        userCountPro.textContent = selectedUsers;
        const price = priceMap[selectedUsers] || 19; // Default price
        proPriceElement.innerHTML = `$${price}<span>/per Gb ingested</span>`;
    }

    userDropdown.addEventListener('change', updatePrice);

    // Initialize price on page load
    updatePrice();
});
