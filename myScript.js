    const filterButtons = document.querySelectorAll(".btn-filter");
    const selectedAllergens = new Set(); // Set to store selected allergens

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const allergen = this.getAttribute("data-filter");

            if (this.classList.contains("active")) {
                // If active, remove allergen from the set and deactivate the button
                selectedAllergens.delete(allergen);
                this.classList.remove("active");
            } else {
                // If not active, add allergen to the set and activate the button
                selectedAllergens.add(allergen);
                this.classList.add("active");
            }

            // Update the items displayed based on the selected allergens
            filterSelection();
        });
    });

    function filterSelection() {
        const items = document.querySelectorAll(".filterDiv");

        items.forEach(item => {
            let hideItem = false;

            selectedAllergens.forEach(allergen => {
                if (item.classList.contains(allergen)) {
                    hideItem = true; // If the item contains a selected allergen, mark it for hiding
                }
            });

            if (hideItem) {
                item.style.display = "none"; // Hide the item if any selected allergen is present
            } else {
                item.style.display = "block"; // Show the item if no selected allergens are present
            }
        });
    }
