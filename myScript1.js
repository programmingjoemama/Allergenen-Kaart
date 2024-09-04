document.addEventListener('DOMContentLoaded', function() {
    // Get current hour
    const currentHour = new Date().getHours();

    // Get sections
    const lunchSection = document.getElementById('lunch-gerechten');
    const dinnerSection = document.getElementById('dinner-gerechten');
    const borrelSection = document.getElementById('borrel-gerechten');

    function showDishesBasedOnTime() {
        if (currentHour >= 11 && currentHour < 16) { // 11 AM to 4 PM
            lunchSection.style.display = 'block';
            dinnerSection.style.display = 'none';
            borrelSection.style.display = 'none';
        } else if (currentHour >= 16 && currentHour < 21) { // 4 PM to 9 PM
            lunchSection.style.display = 'none';
            dinnerSection.style.display = 'block';
            borrelSection.style.display = 'none';
        } else {
            lunchSection.style.display = 'none';
            dinnerSection.style.display = 'none';
            borrelSection.style.display = 'block';
        }
       
    }

    // Call the function immediately to display initial dishes
    showDishesBasedOnTime();
});
