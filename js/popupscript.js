document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    console.log('script.js');
    // Load the popup content dynamically
    fetch('/common/popup.html')
        .then(response => response.text())
        .then(data => {
            popupContainer.innerHTML = data;


            initializePredictiveText();
         

            $(document).on('click', '#editDetailsBtn', function () {
                $('#qna-7 input').prop('readonly', false).css('border', '1px solid #ccc');
                $('#qna-7 select').prop('disabled', false).css('border', '1px solid #ccc');
            });

            // Handle the visibility of the divCountry
            const radioButtons = document.querySelectorAll('input[name="solutions"]');
            const divCountry = document.getElementById('divCountry');
            const nxtBtn = document.getElementById("nxtBtn1");
            
            // Function to handle the visibility of the divCountry
            function handleCountrySelection() {
                console.log('in handleCountrySelection');
                let isOtherSelected = false;
                radioButtons.forEach(radio => {
                    if (radio.checked && radio.labels[0].textContent.trim() === 'Other') {
                        isOtherSelected = true;
                    }
                });

                if (isOtherSelected) {
                    divCountry.style.display = 'block';
                    nxtBtn.style.display = 'block';
                } else {
                    divCountry.style.display = 'none';
                    nxtBtn.style.display = 'none';
                }
            }

            // Add event listener to each radio button
            radioButtons.forEach(radio => {
                radio.addEventListener('change', handleCountrySelection);
            });            

            // After loading the popup content, add the event listeners
            const popup = document.getElementById('popup');
            const openPopupButtons = document.querySelectorAll('.button.line.card-btn, .button.open-popup, .button.line.open-popup, .button.white-line.open-popup');
            const closePopupButton = document.getElementById('closePopup');

            openPopupButtons.forEach(button => {
                button.addEventListener('click', function () {
                    popup.style.display = 'block';
                    document.body.classList.add('popup-active');
                });
            });

            closePopupButton.addEventListener('click', function () {
                popup.style.display = 'none';
                document.body.classList.remove('popup-active');
            });

            window.addEventListener('click', function (event) {
                if (event.target == popup) {
                    popup.style.display = 'none';
                    document.body.classList.remove('popup-active');
                }
            });
        })
        .catch(error => console.error('Error loading popup:', error));
});


function initializePredictiveText() {
    $(document).ready(function () {
        // Call the function from predictive-course.js to initialize predictive text
        if (typeof initializePredictiveAutocomplete === "function") {
            initializePredictiveAutocomplete();
        } else {
            console.error("Predictive text initialization function not found.");
        }
    });
}


