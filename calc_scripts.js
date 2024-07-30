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
        const totalCost = (logAmount * logPrice * 30) + 250 + (users * 2);
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
