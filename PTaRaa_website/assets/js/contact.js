document
  .getElementById("contactForm")
  .addEventListener("submitButton", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = document.getElementById("submitButton");

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // ✅ Disable button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerText = "Sending...";

    const { success, message: responseMessage } = await sendContactUsForm({
      name,
      email,
      subject,
      message,
    });

    alert(responseMessage);

    if (success) {
      document.getElementById("contactForm").reset();
    }

    // ✅ Re-enable button after the API call
    submitButton.disabled = false;
    submitButton.innerText = "Send";
  });
