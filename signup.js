const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Simple validation
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill all fields!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // For demo, log the data
  console.log({ name, email, password });
  alert("Signup successful!");

  // Reset the form
  form.reset();
});
