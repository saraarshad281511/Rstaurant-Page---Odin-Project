import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector("#content");

    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const contactButton = document.querySelector("#contact-btn");

    function clearContent() {
        content.textContent = "";
    }

    homeButton.addEventListener("click", () => {
        clearContent();
        loadHome();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    contactButton.addEventListener("click", () => {
        clearContent();
        loadContact();
    });

    loadHome();
});