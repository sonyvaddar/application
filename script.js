function goReview() {
  const data = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    course: course.value
  };

  localStorage.setItem("application", JSON.stringify(data));
  window.location = "review.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("application"));
  if (data && document.getElementById("output")) {
    output.innerHTML = `
      Name: ${data.name}<br>
      Email: ${data.email}<br>
      Mobile: ${data.mobile}<br>
      Course: ${data.course}
    `;
  }
});

function submitForm() {
  localStorage.removeItem("application");
  window.location = "success.html";
}
