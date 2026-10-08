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

export default loadMenu;