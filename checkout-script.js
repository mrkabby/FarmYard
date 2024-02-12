// Get the form element
const checkoutForm = document.getElementById('checkout-form');

// Add event listener for form submission
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform any client-side validation here
  
  // If the form is valid, submit the form to the server
  submitForm();
});

// Function to submit the form to the server
function submitForm() {
  // You can use AJAX or other methods to send the form data to the server

  // Example using Fetch API
  fetch('submit_order.php', {
    method: 'POST',
    body: new FormData(checkoutForm)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // Show success message or redirect to a thank you page
      alert('Order placed successfully!');
    } else {
      // Show error message or handle the error condition
      alert('Failed to place the order. Please try again.');
    }
    })
    .catch(error => {
    // Handle any network or server-side errors
    console.error('Error:', error);
    });
    }