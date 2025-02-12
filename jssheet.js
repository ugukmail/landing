document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit');
    const loadingMessage = document.getElementById('loading-message');  // Get the loading spinner
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwyoLdJjEEhnjOb9C186nWovnkTZ4YnHm64Xm70Ei5u9EXlzGxPdQ4j9TVH1DAh2Fde/exec';

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Show the loading state on the button
        submitBtn.classList.add('loading');  // Add loading class
        submitBtn.innerText = "Submitting...";  // Change button text

        // Show the spinner
        loadingMessage.style.display = 'block';

        // Use FormData to gather form data
        const formData = new FormData(form);

        // Submit the form data using fetch
        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Hide the spinner and reset the button
                loadingMessage.style.display = 'none';
                submitBtn.classList.remove('loading');
                submitBtn.innerText = "🔥 Become an Early Adopter"; // Reset button text
                alert("Thanks for your submission! We'll reach out when we launch.");
                form.reset(); // Reset the form
            } else {
                loadingMessage.style.display = 'none'; // Hide spinner on error
                submitBtn.classList.remove('loading');
                submitBtn.innerText = "🔥 Become an Early Adopter"; // Reset button text
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            loadingMessage.style.display = 'none'; // Hide spinner on error
            console.error('Error!', error.message);
            alert("Error submitting form. Please try again later.");
            submitBtn.classList.remove('loading');
            submitBtn.innerText = "🔥 Become an Early Adopter"; // Reset button text
        });
    });
});
