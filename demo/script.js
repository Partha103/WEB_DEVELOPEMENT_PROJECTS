document.addEventListener('DOMContentLoaded', function() {
    const recordBtn = document.querySelector('.record-btn');
    const outputDiv = document.querySelector('.output');

    recordBtn.addEventListener('click', function() {
        outputDiv.innerHTML = 'Recording...';

        // Make API request to Flask backend
        fetch('/process-audio')
            .then(response => response.json())
            .then(data => {
                outputDiv.innerHTML = data.message;
            })
            .catch(error => {
                console.error('Error:', error);
                outputDiv.innerHTML = 'Error occurred. Please try again.';
            });
    });
});
