
    
        document.addEventListener('DOMContentLoaded', function() {
            // Get references to the elements
            const brandFilter = document.getElementById('brand-filter');
            const typeFilter = document.getElementById('type-filter');
            const filterButton = document.getElementById('filter-button');
            const carItems = document.querySelectorAll('.car-item');

            // This is the function that will do the filtering
            function applyFilters() {
                const selectedBrand = brandFilter.value;
                const selectedType = typeFilter.value;

                // Loop through each car on the page
                carItems.forEach(function(car) {
                    const carBrand = car.dataset.brand;
                    const carType = car.dataset.type;

                    // Check if the car matches the selected filters
                    const brandMatch = (selectedBrand === 'all' || selectedBrand === carBrand);
                    const typeMatch = (selectedType === 'all' || selectedType === carType);

                    // Show or hide the car based on the match
                    if (brandMatch && typeMatch) {
                        car.style.display = 'block'; // Show the car
                    } else {
                        car.style.display = 'none'; // Hide the car
                    }
                });
            }

            // Add an event listener to the button to run the function when clicked
            filterButton.addEventListener('click', applyFilters);
        });
    
