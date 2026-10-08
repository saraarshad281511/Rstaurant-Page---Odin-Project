function loadContact() {
    const content = document.querySelector("#content");

    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Get In Touch";

    // Introduction
    const intro = document.createElement("p");
    intro.textContent =
        "Have a question, want to make a reservation, or simply want to say hello? We'd love to hear from you!";
    intro.classList.add("contact-intro");

    // Contact information container
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    // Phone
    const phone = document.createElement("div");
    phone.classList.add("contact-item");

    const phoneTitle = document.createElement("h3");
    phoneTitle.textContent = "📞 Phone";

    const phoneText = document.createElement("p");
    phoneText.textContent = "+92 300 1234567";

    phone.appendChild(phoneTitle);
    phone.appendChild(phoneText);

    // Email
    const email = document.createElement("div");
    email.classList.add("contact-item");

    const emailTitle = document.createElement("h3");
    emailTitle.textContent = "📧 Email";

    const emailText = document.createElement("p");
    emailText.textContent = "hello@sarahskitchen.com";

    email.appendChild(emailTitle);
    email.appendChild(emailText);

    // Address
    const address = document.createElement("div");
    address.classList.add("contact-item");

    const addressTitle = document.createElement("h3");
    addressTitle.textContent = "📍 Address";

    const addressText = document.createElement("p");
    addressText.textContent = "123 Food Street, Lahore";

    address.appendChild(addressTitle);
    address.appendChild(addressText);

    // Add contact items
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactInfo.appendChild(address);

    // Add everything to page
    contactPage.appendChild(heading);
    contactPage.appendChild(intro);
    contactPage.appendChild(contactInfo);

    content.appendChild(contactPage);
}

export default loadContact;