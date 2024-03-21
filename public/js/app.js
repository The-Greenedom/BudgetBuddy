document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));
  
      fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Update the UI with the new transaction
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
  