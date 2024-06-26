document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientPhone = document.getElementById('clientPhone').value;
        const clientEnquiry = document.getElementById('clientEnquiry').value;
        const isClientChecked = document.getElementById('isclient').checked;

        // Get the label text for the checkbox
        const isClientLabel = document.querySelector('label[for="isclient"]').innerText;

        // Prepare the data to send
        const templateParams = {
            clientName: clientName,
            clientEmail: clientEmail,
            clientPhone: clientPhone,
            clientEnquiry: clientEnquiry,
            isClient: isClientChecked ? isClientLabel : 'No',
            to_email: 'pssingh050205@gmail.com' // Your email address
        };

        // Send the email
        emailjs.send('service_1g0bl1s', 'template_zwmkgx6', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was a problem sending your message. Please try again later.');
            });
    });
});
