const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry — ${project}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`);

    formStatus.textContent = "Opening your email draft…";
    window.location.href = `mailto:hello@yacht-design-portfolio.com?subject=${subject}&body=${body}`;
  });
}
