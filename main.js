/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";


    // =========================
    // BURGER
    // =========================

    const burger = document.createElement("div");
    burger.classList.add("menu-card", "burger-card");

    const burgerName = document.createElement("h2");
    burgerName.textContent = "Classic Burger";

    const burgerDescription = document.createElement("p");
    burgerDescription.textContent =
        "Juicy beef burger with lettuce, tomato, cheese and our special sauce.";

    const burgerPrice = document.createElement("p");
    burgerPrice.textContent = "$8.99";
    burgerPrice.classList.add("price");

    const burgerButton = document.createElement("button");
    burgerButton.textContent = "Order Now";
    burgerButton.classList.add("order-button");

    burgerButton.addEventListener("click", () => {
        alert("Classic Burger added to your order!");
    });

    burger.appendChild(burgerName);
    burger.appendChild(burgerDescription);
    burger.appendChild(burgerPrice);
    burger.appendChild(burgerButton);


    // =========================
    // PIZZA
    // =========================

    const pizza = document.createElement("div");
    pizza.classList.add("menu-card", "pizza-card");

    const pizzaName = document.createElement("h2");
    pizzaName.textContent = "Margherita Pizza";

    const pizzaDescription = document.createElement("p");
    pizzaDescription.textContent =
        "Fresh tomato, mozzarella and basil on a crispy homemade crust.";

    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "$10.99";
    pizzaPrice.classList.add("price");

    const pizzaButton = document.createElement("button");
    pizzaButton.textContent = "Order Now";
    pizzaButton.classList.add("order-button");

    pizzaButton.addEventListener("click", () => {
        alert("Margherita Pizza added to your order!");
    });

    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaDescription);
    pizza.appendChild(pizzaPrice);
    pizza.appendChild(pizzaButton);


    // =========================
    // PASTA
    // =========================

    const pasta = document.createElement("div");
    pasta.classList.add("menu-card", "pasta-card");

    const pastaName = document.createElement("h2");
    pastaName.textContent = "Creamy Alfredo Pasta";

    const pastaDescription = document.createElement("p");
    pastaDescription.textContent =
        "Creamy Alfredo sauce with parmesan cheese and perfectly cooked pasta.";

    const pastaPrice = document.createElement("p");
    pastaPrice.textContent = "$9.99";
    pastaPrice.classList.add("price");

    const pastaButton = document.createElement("button");
    pastaButton.textContent = "Order Now";
    pastaButton.classList.add("order-button");

    pastaButton.addEventListener("click", () => {
        alert("Creamy Alfredo Pasta added to your order!");
    });

    pasta.appendChild(pastaName);
    pasta.appendChild(pastaDescription);
    pasta.appendChild(pastaPrice);
    pasta.appendChild(pastaButton);


    // =========================
    // SALAD
    // =========================

    const salad = document.createElement("div");
    salad.classList.add("menu-card", "salad-card");

    const saladName = document.createElement("h2");
    saladName.textContent = "Caesar Salad";

    const saladDescription = document.createElement("p");
    saladDescription.textContent =
        "Crisp lettuce, parmesan cheese, crunchy croutons and Caesar dressing.";

    const saladPrice = document.createElement("p");
    saladPrice.textContent = "$7.99";
    saladPrice.classList.add("price");

    const saladButton = document.createElement("button");
    saladButton.textContent = "Order Now";
    saladButton.classList.add("order-button");

    saladButton.addEventListener("click", () => {
        alert("Caesar Salad added to your order!");
    });

    salad.appendChild(saladName);
    salad.appendChild(saladDescription);
    salad.appendChild(saladPrice);
    salad.appendChild(saladButton);


    // =========================
    // DESSERT
    // =========================

    const dessert = document.createElement("div");
    dessert.classList.add("menu-card", "dessert-card");

    const dessertName = document.createElement("h2");
    dessertName.textContent = "Chocolate Cake";

    const dessertDescription = document.createElement("p");
    dessertDescription.textContent =
        "Rich chocolate cake layered with smooth chocolate cream.";

    const dessertPrice = document.createElement("p");
    dessertPrice.textContent = "$5.99";
    dessertPrice.classList.add("price");

    const dessertButton = document.createElement("button");
    dessertButton.textContent = "Order Now";
    dessertButton.classList.add("order-button");

    dessertButton.addEventListener("click", () => {
        alert("Chocolate Cake added to your order!");
    });

    dessert.appendChild(dessertName);
    dessert.appendChild(dessertDescription);
    dessert.appendChild(dessertPrice);
    dessert.appendChild(dessertButton);


    // =========================
    // DRINK
    // =========================

    const drink = document.createElement("div");
    drink.classList.add("menu-card", "drink-card");

    const drinkName = document.createElement("h2");
    drinkName.textContent = "Fresh Lemonade";

    const drinkDescription = document.createElement("p");
    drinkDescription.textContent =
        "Refreshing homemade lemonade made with fresh lemons and mint.";

    const drinkPrice = document.createElement("p");
    drinkPrice.textContent = "$3.99";
    drinkPrice.classList.add("price");

    const drinkButton = document.createElement("button");
    drinkButton.textContent = "Order Now";
    drinkButton.classList.add("order-button");

    drinkButton.addEventListener("click", () => {
        alert("Fresh Lemonade added to your order!");
    });

    drink.appendChild(drinkName);
    drink.appendChild(drinkDescription);
    drink.appendChild(drinkPrice);
    drink.appendChild(drinkButton);


    // =========================
    // ADD EVERYTHING TO MENU
    // =========================

    menuPage.appendChild(heading);
    menuPage.appendChild(burger);
    menuPage.appendChild(pizza);
    menuPage.appendChild(pasta);
    menuPage.appendChild(salad);
    menuPage.appendChild(dessert);
    menuPage.appendChild(drink);

    content.appendChild(menuPage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





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
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    contactButton.addEventListener("click", () => {
        clearContent();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEUxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ3pHdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDek52QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDNUJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0EsRTs7O1VDUEEseUY7OztVQ0FBO1VBQ0E7VUFDQSxzREFBc0QsaUJBQWlCO1VBQ3ZFLGdEQUFnRCxhQUFhO1VBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNKaUM7QUFDQTtBQUNNO0FBQ2xCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLHVEQUFXO0FBQ25CLEtBQUs7O0FBRUwsSUFBSSxvREFBUTtBQUNaLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXBhZ2VcIik7XG5cbiAgICAvLyBIZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIjtcblxuICAgIC8vIEludHJvZHVjdGlvblxuICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW50cm8udGV4dENvbnRlbnQgPVxuICAgICAgICBcIkhhdmUgYSBxdWVzdGlvbiwgd2FudCB0byBtYWtlIGEgcmVzZXJ2YXRpb24sIG9yIHNpbXBseSB3YW50IHRvIHNheSBoZWxsbz8gV2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UhXCI7XG4gICAgaW50cm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW50cm9cIik7XG5cbiAgICAvLyBDb250YWN0IGluZm9ybWF0aW9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuXG4gICAgLy8gUGhvbmVcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IHBob25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcGhvbmVUaXRsZS50ZXh0Q29udGVudCA9IFwi8J+TniBQaG9uZVwiO1xuXG4gICAgY29uc3QgcGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gXCIrOTIgMzAwIDEyMzQ1NjdcIjtcblxuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lVGl0bGUpO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lVGV4dCk7XG5cbiAgICAvLyBFbWFpbFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pdGVtXCIpO1xuXG4gICAgY29uc3QgZW1haWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBlbWFpbFRpdGxlLnRleHRDb250ZW50ID0gXCLwn5OnIEVtYWlsXCI7XG5cbiAgICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbWFpbFRleHQudGV4dENvbnRlbnQgPSBcImhlbGxvQHNhcmFoc2tpdGNoZW4uY29tXCI7XG5cbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbFRpdGxlKTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbFRleHQpO1xuXG4gICAgLy8gQWRkcmVzc1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IGFkZHJlc3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBhZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSBcIvCfk40gQWRkcmVzc1wiO1xuXG4gICAgY29uc3QgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9IFwiMTIzIEZvb2QgU3RyZWV0LCBMYWhvcmVcIjtcblxuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc1RpdGxlKTtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcblxuICAgIC8vIEFkZCBjb250YWN0IGl0ZW1zXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIC8vIEFkZCBldmVyeXRoaW5nIHRvIHBhZ2VcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChpbnRybyk7XG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKTtcblxuICAgIC8vIFNtYWxsIHRhZ2xpbmVcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFnbGluZS50ZXh0Q29udGVudCA9IFwiRlJFU0gg4oCiIEhPTUVNQURFIOKAoiBERUxJQ0lPVVNcIjtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoXCJob21lLXRhZ2xpbmVcIik7XG5cbiAgICAvLyBNYWluIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gU2FyYWgncyBLaXRjaGVuXCI7XG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiR29vZCBmb29kLCBncmVhdCBmbGF2b3JzLCBhbmQgYSB3YXJtIGF0bW9zcGhlcmUuIENvbWUgZW5qb3kgZGVsaWNpb3VzIGhvbWVtYWRlIG1lYWxzIG1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLlwiO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1kZXNjcmlwdGlvblwiKTtcblxuICAgIC8vIEJ1dHRvbnMgY29udGFpbmVyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25zXCIpO1xuXG4gICAgLy8gTWVudSBidXR0b25cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IE91ciBNZW51XCI7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1tZW51LWJ1dHRvblwiKTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudU5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIik7XG4gICAgICAgIG1lbnVOYXZCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcblxuICAgIC8vIENvbnRhY3QgYnV0dG9uXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFjdC1idXR0b25cIik7XG5cbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3ROYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtYnRuXCIpO1xuICAgICAgICBjb250YWN0TmF2QnV0dG9uLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICAvLyBGZWF0dXJlc1xuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1mZWF0dXJlc1wiKTtcblxuICAgIGNvbnN0IGZlYXR1cmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmZWF0dXJlMS5jbGFzc0xpc3QuYWRkKFwiZmVhdHVyZVwiKTtcblxuICAgIGNvbnN0IGZlYXR1cmUxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZmVhdHVyZTFUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJlc2ggSW5ncmVkaWVudHNcIjtcblxuICAgIGNvbnN0IGZlYXR1cmUxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZlYXR1cmUxVGV4dC50ZXh0Q29udGVudCA9IFwiUXVhbGl0eSBpbmdyZWRpZW50cyBpbiBldmVyeSBkaXNoLlwiO1xuXG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmVhdHVyZTFUaXRsZSk7XG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmVhdHVyZTFUZXh0KTtcblxuXG4gICAgY29uc3QgZmVhdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZlYXR1cmUyLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlXCIpO1xuXG4gICAgY29uc3QgZmVhdHVyZTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBmZWF0dXJlMlRpdGxlLnRleHRDb250ZW50ID0gXCJIb21lbWFkZSBNZWFsc1wiO1xuXG4gICAgY29uc3QgZmVhdHVyZTJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmVhdHVyZTJUZXh0LnRleHRDb250ZW50ID0gXCJQcmVwYXJlZCBmcmVzaCB3aXRoIGxvdmUgZXZlcnkgZGF5LlwiO1xuXG4gICAgZmVhdHVyZTIuYXBwZW5kQ2hpbGQoZmVhdHVyZTJUaXRsZSk7XG4gICAgZmVhdHVyZTIuYXBwZW5kQ2hpbGQoZmVhdHVyZTJUZXh0KTtcblxuXG4gICAgY29uc3QgZmVhdHVyZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZlYXR1cmUzLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlXCIpO1xuXG4gICAgY29uc3QgZmVhdHVyZTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBmZWF0dXJlM1RpdGxlLnRleHRDb250ZW50ID0gXCJHcmVhdCBUYXN0ZVwiO1xuXG4gICAgY29uc3QgZmVhdHVyZTNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmVhdHVyZTNUZXh0LnRleHRDb250ZW50ID0gXCJGbGF2b3JzIHlvdSdsbCB3YW50IHRvIGNvbWUgYmFjayBmb3IuXCI7XG5cbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZChmZWF0dXJlM1RpdGxlKTtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZChmZWF0dXJlM1RleHQpO1xuXG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTEpO1xuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUyKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMyk7XG5cblxuICAgIC8vIEFkZCBldmVyeXRoaW5nXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChmZWF0dXJlcyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1wYWdlXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQlVSR0VSXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiLCBcImJ1cmdlci1jYXJkXCIpO1xuXG4gICAgY29uc3QgYnVyZ2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBidXJnZXJOYW1lLnRleHRDb250ZW50ID0gXCJDbGFzc2ljIEJ1cmdlclwiO1xuXG4gICAgY29uc3QgYnVyZ2VyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXJnZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiSnVpY3kgYmVlZiBidXJnZXIgd2l0aCBsZXR0dWNlLCB0b21hdG8sIGNoZWVzZSBhbmQgb3VyIHNwZWNpYWwgc2F1Y2UuXCI7XG5cbiAgICBjb25zdCBidXJnZXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJ1cmdlclByaWNlLnRleHRDb250ZW50ID0gXCIkOC45OVwiO1xuICAgIGJ1cmdlclByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcblxuICAgIGNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnVyZ2VyQnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJ1dHRvblwiKTtcblxuICAgIGJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhbGVydChcIkNsYXNzaWMgQnVyZ2VyIGFkZGVkIHRvIHlvdXIgb3JkZXIhXCIpO1xuICAgIH0pO1xuXG4gICAgYnVyZ2VyLmFwcGVuZENoaWxkKGJ1cmdlck5hbWUpO1xuICAgIGJ1cmdlci5hcHBlbmRDaGlsZChidXJnZXJEZXNjcmlwdGlvbik7XG4gICAgYnVyZ2VyLmFwcGVuZENoaWxkKGJ1cmdlclByaWNlKTtcbiAgICBidXJnZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyQnV0dG9uKTtcblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFBJWlpBXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3QgcGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIiwgXCJwaXp6YS1jYXJkXCIpO1xuXG4gICAgY29uc3QgcGl6emFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHBpenphTmFtZS50ZXh0Q29udGVudCA9IFwiTWFyZ2hlcml0YSBQaXp6YVwiO1xuXG4gICAgY29uc3QgcGl6emFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBpenphRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgICBcIkZyZXNoIHRvbWF0bywgbW96emFyZWxsYSBhbmQgYmFzaWwgb24gYSBjcmlzcHkgaG9tZW1hZGUgY3J1c3QuXCI7XG5cbiAgICBjb25zdCBwaXp6YVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGl6emFQcmljZS50ZXh0Q29udGVudCA9IFwiJDEwLjk5XCI7XG4gICAgcGl6emFQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5cbiAgICBjb25zdCBwaXp6YUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcGl6emFCdXR0b24udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIHBpenphQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1idXR0b25cIik7XG5cbiAgICBwaXp6YUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhbGVydChcIk1hcmdoZXJpdGEgUGl6emEgYWRkZWQgdG8geW91ciBvcmRlciFcIik7XG4gICAgfSk7XG5cbiAgICBwaXp6YS5hcHBlbmRDaGlsZChwaXp6YU5hbWUpO1xuICAgIHBpenphLmFwcGVuZENoaWxkKHBpenphRGVzY3JpcHRpb24pO1xuICAgIHBpenphLmFwcGVuZENoaWxkKHBpenphUHJpY2UpO1xuICAgIHBpenphLmFwcGVuZENoaWxkKHBpenphQnV0dG9uKTtcblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFBBU1RBXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3QgcGFzdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhc3RhLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIiwgXCJwYXN0YS1jYXJkXCIpO1xuXG4gICAgY29uc3QgcGFzdGFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHBhc3RhTmFtZS50ZXh0Q29udGVudCA9IFwiQ3JlYW15IEFsZnJlZG8gUGFzdGFcIjtcblxuICAgIGNvbnN0IHBhc3RhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXN0YURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJDcmVhbXkgQWxmcmVkbyBzYXVjZSB3aXRoIHBhcm1lc2FuIGNoZWVzZSBhbmQgcGVyZmVjdGx5IGNvb2tlZCBwYXN0YS5cIjtcblxuICAgIGNvbnN0IHBhc3RhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXN0YVByaWNlLnRleHRDb250ZW50ID0gXCIkOS45OVwiO1xuICAgIHBhc3RhUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gICAgY29uc3QgcGFzdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBhc3RhQnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBwYXN0YUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnV0dG9uXCIpO1xuXG4gICAgcGFzdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJDcmVhbXkgQWxmcmVkbyBQYXN0YSBhZGRlZCB0byB5b3VyIG9yZGVyIVwiKTtcbiAgICB9KTtcblxuICAgIHBhc3RhLmFwcGVuZENoaWxkKHBhc3RhTmFtZSk7XG4gICAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFEZXNjcmlwdGlvbik7XG4gICAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFQcmljZSk7XG4gICAgcGFzdGEuYXBwZW5kQ2hpbGQocGFzdGFCdXR0b24pO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gU0FMQURcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjb25zdCBzYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FsYWQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiLCBcInNhbGFkLWNhcmRcIik7XG5cbiAgICBjb25zdCBzYWxhZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc2FsYWROYW1lLnRleHRDb250ZW50ID0gXCJDYWVzYXIgU2FsYWRcIjtcblxuICAgIGNvbnN0IHNhbGFkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzYWxhZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJDcmlzcCBsZXR0dWNlLCBwYXJtZXNhbiBjaGVlc2UsIGNydW5jaHkgY3JvdXRvbnMgYW5kIENhZXNhciBkcmVzc2luZy5cIjtcblxuICAgIGNvbnN0IHNhbGFkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzYWxhZFByaWNlLnRleHRDb250ZW50ID0gXCIkNy45OVwiO1xuICAgIHNhbGFkUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gICAgY29uc3Qgc2FsYWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhbGFkQnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBzYWxhZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnV0dG9uXCIpO1xuXG4gICAgc2FsYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJDYWVzYXIgU2FsYWQgYWRkZWQgdG8geW91ciBvcmRlciFcIik7XG4gICAgfSk7XG5cbiAgICBzYWxhZC5hcHBlbmRDaGlsZChzYWxhZE5hbWUpO1xuICAgIHNhbGFkLmFwcGVuZENoaWxkKHNhbGFkRGVzY3JpcHRpb24pO1xuICAgIHNhbGFkLmFwcGVuZENoaWxkKHNhbGFkUHJpY2UpO1xuICAgIHNhbGFkLmFwcGVuZENoaWxkKHNhbGFkQnV0dG9uKTtcblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIERFU1NFUlRcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNzZXJ0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIiwgXCJkZXNzZXJ0LWNhcmRcIik7XG5cbiAgICBjb25zdCBkZXNzZXJ0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBkZXNzZXJ0TmFtZS50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIENha2VcIjtcblxuICAgIGNvbnN0IGRlc3NlcnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc3NlcnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiUmljaCBjaG9jb2xhdGUgY2FrZSBsYXllcmVkIHdpdGggc21vb3RoIGNob2NvbGF0ZSBjcmVhbS5cIjtcblxuICAgIGNvbnN0IGRlc3NlcnRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc3NlcnRQcmljZS50ZXh0Q29udGVudCA9IFwiJDUuOTlcIjtcbiAgICBkZXNzZXJ0UHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gICAgY29uc3QgZGVzc2VydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVzc2VydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG4gICAgZGVzc2VydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnV0dG9uXCIpO1xuXG4gICAgZGVzc2VydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhbGVydChcIkNob2NvbGF0ZSBDYWtlIGFkZGVkIHRvIHlvdXIgb3JkZXIhXCIpO1xuICAgIH0pO1xuXG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChkZXNzZXJ0TmFtZSk7XG4gICAgZGVzc2VydC5hcHBlbmRDaGlsZChkZXNzZXJ0RGVzY3JpcHRpb24pO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydFByaWNlKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRCdXR0b24pO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gRFJJTktcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjb25zdCBkcmluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHJpbmsuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiLCBcImRyaW5rLWNhcmRcIik7XG5cbiAgICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgZHJpbmtOYW1lLnRleHRDb250ZW50ID0gXCJGcmVzaCBMZW1vbmFkZVwiO1xuXG4gICAgY29uc3QgZHJpbmtEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRyaW5rRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgICBcIlJlZnJlc2hpbmcgaG9tZW1hZGUgbGVtb25hZGUgbWFkZSB3aXRoIGZyZXNoIGxlbW9ucyBhbmQgbWludC5cIjtcblxuICAgIGNvbnN0IGRyaW5rUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkcmlua1ByaWNlLnRleHRDb250ZW50ID0gXCIkMy45OVwiO1xuICAgIGRyaW5rUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gICAgY29uc3QgZHJpbmtCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRyaW5rQnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBkcmlua0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnV0dG9uXCIpO1xuXG4gICAgZHJpbmtCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJGcmVzaCBMZW1vbmFkZSBhZGRlZCB0byB5b3VyIG9yZGVyIVwiKTtcbiAgICB9KTtcblxuICAgIGRyaW5rLmFwcGVuZENoaWxkKGRyaW5rTmFtZSk7XG4gICAgZHJpbmsuYXBwZW5kQ2hpbGQoZHJpbmtEZXNjcmlwdGlvbik7XG4gICAgZHJpbmsuYXBwZW5kQ2hpbGQoZHJpbmtQcmljZSk7XG4gICAgZHJpbmsuYXBwZW5kQ2hpbGQoZHJpbmtCdXR0b24pO1xuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQUREIEVWRVJZVEhJTkcgVE8gTUVOVVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGJ1cmdlcik7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQocGl6emEpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKHBhc3RhKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChzYWxhZCk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoZGVzc2VydCk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoZHJpbmspO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWJ0blwiKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ0blwiKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pO1xuXG4gICAgbG9hZEhvbWUoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==