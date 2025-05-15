async function subscribeToNewsletter(email) {
  const url = `https://api.peetaraa.com/v1/api/web/news-letter/subscribe?email=${encodeURIComponent(
    email
  )}`;

  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);

    const result = await response.json();
    if (response.ok) {
      return { success: true, message: "Subscribed successfully!" };
    } else {
      return {
        success: false,
        message: result.message || "Failed to subscribe.",
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

async function sendContactUsForm({ name, email, subject, message }) {
  const url =
    "https://api.peetaraa.com/v1/api/web/contact-us";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message }),
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    } else {
      return {
        success: false,
        message: result.message || "Failed to send message.",
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
