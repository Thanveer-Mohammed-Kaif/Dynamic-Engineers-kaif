function sendmail(event) {
  event.preventDefault(); 

  let name = document.getElementById('name').value.trim();
  let mobile = document.getElementById('mobile').value.trim();
  let email = document.getElementById('email').value.trim();
  let companyname = document.getElementById('companyName').value.trim();
  let message = document.getElementById('message').value.trim();

  // Check for empty fields
  if (!name || !mobile || !email || !companyname || !message) {
    alert("⚠️ Please fill in all fields before sending the email.");
    return; 
  }

  // ✅ Email format validation (inside function)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  // Prepare email parameters
  let params = { name, mobile, email, companyname, message };

  // Send email
  emailjs
    .send("service_3xt5st5", "template_myl93bo", params)
    .then(() => {
      alert("✅ Email sent successfully!");
      document.querySelector("form").reset();
    })
    .catch((error) => {
      console.error("❌ Email failed:", error);
      alert("❌ Failed to send email. Please try again later.");
    });
}
