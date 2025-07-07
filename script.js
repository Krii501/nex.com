document.addEventListener('DOMContentLoaded', () => {
    // Hide loader when page is loaded
    const loader = document.querySelector('.loader-container');
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
    });

    // Close notification
    const closeNotification = document.querySelector('.close-notification');
    const notification = document.querySelector('.notification-bar');

    if (closeNotification && notification) {
        closeNotification.addEventListener('click', () => {
            notification.style.display = 'none';
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Add your search logic here
                console.log('Searching for:', searchTerm);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // Add your search logic here
                    console.log('Searching for:', searchTerm);
                }
            }
        });
    }

    // Add hover effect to movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
