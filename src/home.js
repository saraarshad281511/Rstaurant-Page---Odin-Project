function loadHome() {
    const content = document.querySelector("#content");

    const homePage = document.createElement("div");
    homePage.classList.add("home-page");

    // Small tagline
    const tagline = document.createElement("p");
    tagline.textContent = "FRESH • HOMEMADE • DELICIOUS";
    tagline.classList.add("home-tagline");

    // Main heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Sarah's Kitchen";

    // Description
    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Good food, great flavors, and a warm atmosphere. Come enjoy delicious homemade meals made with the finest ingredients.";
    paragraph.classList.add("home-description");

    // Buttons container
    const buttons = document.createElement("div");
    buttons.classList.add("home-buttons");

    // Menu button
    const menuButton = document.createElement("button");
    menuButton.textContent = "View Our Menu";
    menuButton.classList.add("home-menu-button");

    menuButton.addEventListener("click", () => {
        const menuNavButton = document.querySelector("#menu-btn");
        menuNavButton.click();
    });

    // Contact button
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact Us";
    contactButton.classList.add("home-contact-button");

    contactButton.addEventListener("click", () => {
        const contactNavButton = document.querySelector("#contact-btn");
        contactNavButton.click();
    });

    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);

    // Features
    const features = document.createElement("div");
    features.classList.add("home-features");

    const feature1 = document.createElement("div");
    feature1.classList.add("feature");

    const feature1Title = document.createElement("h3");
    feature1Title.textContent = "Fresh Ingredients";

    const feature1Text = document.createElement("p");
    feature1Text.textContent = "Quality ingredients in every dish.";

    feature1.appendChild(feature1Title);
    feature1.appendChild(feature1Text);


    const feature2 = document.createElement("div");
    feature2.classList.add("feature");

    const feature2Title = document.createElement("h3");
    feature2Title.textContent = "Homemade Meals";

    const feature2Text = document.createElement("p");
    feature2Text.textContent = "Prepared fresh with love every day.";

    feature2.appendChild(feature2Title);
    feature2.appendChild(feature2Text);


    const feature3 = document.createElement("div");
    feature3.classList.add("feature");

    const feature3Title = document.createElement("h3");
    feature3Title.textContent = "Great Taste";

    const feature3Text = document.createElement("p");
    feature3Text.textContent = "Flavors you'll want to come back for.";

    feature3.appendChild(feature3Title);
    feature3.appendChild(feature3Text);

    features.appendChild(feature1);
    features.appendChild(feature2);
    features.appendChild(feature3);


    // Add everything
    homePage.appendChild(tagline);
    homePage.appendChild(heading);
    homePage.appendChild(paragraph);
    homePage.appendChild(buttons);
    homePage.appendChild(features);

    content.appendChild(homePage);
}

export default loadHome;