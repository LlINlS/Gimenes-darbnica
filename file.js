// Prieks pasa menu upload

const form = document.querySelector('form');
const foodNameInput = document.querySelector('#food-name');
const descriptionInput = document.querySelector('#description');
const priceInput = document.querySelector('#price');
const pictureInput = document.querySelector('#picture');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  
  // Formdata object - data store
  const formData = new FormData();
  formData.append('food-name', foodNameInput.value);
  formData.append('description', descriptionInput.value);
  formData.append('price', priceInput.value);
  formData.append('picture', pictureInput.files[0]);

  try {
    // Send a POST request to the server to submit the form data
    const response = await fetch('/submit-form', {
      method: 'POST',
      body: formData,
    });

    // If the response is not ok = error
    if (!response.ok) {
      throw new Error('Error submitting form');
    }

    // Reload the page to clear the form inputs  ///-??
    window.location.reload();
  } catch (error) {
    console.error(error);
    // Display an error message to the user
    alert('There was an error submitting the form. Please try again.');
  }
});
