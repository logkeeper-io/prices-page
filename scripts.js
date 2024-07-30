// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const userDropdown = document.getElementById('user-dropdown');
    const proPriceElement = document.getElementById('pro-price');
    const userCountPro = document.getElementById('user-count-pro');

    // Price mapping
    const priceMap = {
        5: 19,
        10: 22,
        15: 30,
        20: 40
    };

    function updatePrice() {
        const selectedUsers = parseInt(userDropdown.value, 10);
        userCountPro.textContent = selectedUsers;
        const price = priceMap[selectedUsers] || 19; // Default price
        proPriceElement.innerHTML = `$${price}<span>/mo</span>`;
    }

    userDropdown.addEventListener('change', updatePrice);

    // Initialize price on page load
    updatePrice();
});
