export const menu = () => {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("title");
    menuTitle.innerHTML = "Galley Grub";
    content.appendChild(menuTitle);

    const menuList = document.createElement("ul");
    menuList.id = "menu";

    const menuArr = ["Krabby Patty 1.25", "Double Krabby Patty 2.00", "Triple Krabby Patty 3.00", "Krabby Meal 3.50", "Double Krabby Meal 3.75", "Triple Krabby Meal 4.00", "Salty Sea Dog 1.25", "Footlong 2.00", "Sailors Surprise 3.00", "Golden Loaf 2.00"]
    
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = menuArr[i];
        menuList.appendChild(li);
    }

    content.appendChild(menuList);

    const otherContainer = document.createElement("div");
    otherContainer.id = "sidesContainer";

    const sidesList = document.createElement("ul");
    sidesList.classList.add("other-list");
    const side1 = document.createElement("li");
    side1.innerHTML = "Coral Bits 1.50";
    const side2 = document.createElement("li");
    side2.innerHTML = "Kelp Rings 1.50"
    sidesList.appendChild(side1);
    sidesList.appendChild(side2);

    const drinksList = document.createElement("ul");
    drinksList.classList.add("other-list");
    const drink1 = document.createElement("li");
    drink1.innerHTML = "Kelp Shake 2.00";
    const drink2 = document.createElement("li");
    drink2.innerHTML = "Seafoam Soda 1.50"
    drinksList.appendChild(drink1);
    drinksList.appendChild(drink2);

    otherContainer.appendChild(sidesList);
    otherContainer.appendChild(drinksList);

    content.appendChild(otherContainer);
}