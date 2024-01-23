function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };

  // Return the fetch chain for the tests to run correctly
  return fetch("http://localhost:3000/users", configurationObject)
  .then(response => response.json())
  .then(data => {
    const newId = data.id;
    document.body.innerHTML += `<p>New user ID: ${newId}</p>`;
  })
  .catch(error => {
    document.body.innerHTML += `<p>Error: ${error.message}</p>`;
  });
}

// Export the submitData function for testing
module.exports = submitData;
