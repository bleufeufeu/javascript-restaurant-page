import KKpic from "../assets/images/KKpic.png";

export const home = () => {
    const content = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";

    const kkPicture = document.createElement("img");
    kkPicture.id = "kkPic";
    kkPicture.src = KKpic;
    homeContainer.appendChild(kkPicture);

    const homeScreen = document.createElement("div");
    homeScreen.id = "homeScreen";
    homeScreen.innerHTML = "<div class='title'>Welcome to The Krusty Krab</div>";
    homeScreen.innerHTML += "<h1>Try our world famous Krabby Patty today!</h1>"
    homeScreen.innerHTML += "<button>Click to see our menu</button>";
    homeContainer.appendChild(homeScreen);

    content.appendChild(homeContainer)
}