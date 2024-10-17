import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { team } from "./team.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const teamButton = document.querySelector("#teamButton");

const loadPage = (page) => {
    content.innerHTML = "";
    page();
}

homeButton.addEventListener("click", () => loadPage(home));
menuButton.addEventListener("click", () => loadPage(menu));
teamButton.addEventListener("click", () => loadPage(team));

home();

//alert("hello");