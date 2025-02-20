document.addEventListener('DOMContentLoaded', function () {
    const popupNotification = document.getElementById('popupNotification');

    // Load the notification.html content into the div
    fetch('notification.html')
        .then(response => response.text())
        .then(data => {
            popupNotification.innerHTML = data;
            showPopupAfterDelay();
        })
        .catch(error => console.error('Error loading notification:', error));

    // Function to show the popup after 1 seconds
    function showPopupAfterDelay() {
        setTimeout(function () {
            const popup = document.getElementById('popup-notification');
            const popupOverlay = document.getElementById('popup-overlay');

            if (popup && popupOverlay) {
                popup.style.display = 'block';
                popupOverlay.style.display = 'block';
            }
        }, 5000);
    }

    // Function to close the popup
    document.addEventListener('click', function (event) {
        if (event.target.matches('#closePopup') || event.target.matches('#popup-overlay')) {
            const popup = document.getElementById('popup-notification');
            const popupOverlay = document.getElementById('popup-overlay');

            if (popup && popupOverlay) {
                popup.style.display = 'none';
                popupOverlay.style.display = 'none';
            }
        }
    });
});
