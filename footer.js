document.addEventListener('DOMContentLoaded', function () {
    // Check if we are on the "Study Resources" page
    if (window.location.pathname.includes('studyResources.html')) {
        const dropdownToggle = document.querySelector('.arrow'); // The dropdown arrow or button
        const dropdownList = document.querySelector('.dropdown-list');
        const footer = document.querySelector('footer');
        
        // Ensure the dropdown toggle and list exist before adding the event listener
        if (dropdownToggle && dropdownList) {
            dropdownToggle.addEventListener('click', function () {
                // Toggle dropdown visibility
                const isVisible = dropdownList.style.display === 'block';
                
                if (isVisible) {
                    dropdownList.style.display = 'none'; // Hide the dropdown
                    footer.classList.remove('show-footer-effect'); // Slide footer down
                } else {
                    dropdownList.style.display = 'block'; // Show the dropdown
                    footer.classList.add('show-footer-effect'); // Slide footer up
                }
            });
        }
    }
});
