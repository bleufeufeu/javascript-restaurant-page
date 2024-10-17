import KRABSicon from "../assets/images/KRABSicon.png";
import SBicon from "../assets/images/SBicon.png";
import SWicon from "../assets/images/SWicon.png";

export const team = () => {
    const content = document.querySelector("#content");

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = "Our Team";
    content.appendChild(title);

    const teamBoard = document.createElement("div");
    teamBoard.id = "teamBoard";

    const krabsDiv = document.createElement("div");
    krabsDiv.classList.add("char-icon");
    const krabsPic = document.createElement("img");
    krabsPic.src = KRABSicon;
    const krabsName = document.createElement("div");
    krabsName.classList.add("char-name");
    krabsName.innerHTML = "Eugene H. Krabs";
    const krabsTitle = document.createElement("div");
    krabsTitle.classList.add("char-title");
    krabsTitle.innerHTML = "Founder, Owner, and CEO";
    krabsDiv.appendChild(krabsPic);
    krabsDiv.appendChild(krabsName);
    krabsDiv.appendChild(krabsTitle);
    teamBoard.appendChild(krabsDiv);

    const spongeDiv = document.createElement("div");
    spongeDiv.classList.add("char-icon");
    const spongePic = document.createElement("img");
    spongePic.src = SBicon;
    const spongeName = document.createElement("div");
    spongeName.classList.add("char-name");
    spongeName.innerHTML = "Spongebob Squarepants";
    const spongeTitle = document.createElement("div");
    spongeTitle.classList.add("char-title");
    spongeTitle.innerHTML = "Chef de Cuisine";
    spongeDiv.appendChild(spongePic);
    spongeDiv.appendChild(spongeName);
    spongeDiv.appendChild(spongeTitle);
    teamBoard.appendChild(spongeDiv);

    const squidDiv = document.createElement("div");
    squidDiv.classList.add("char-icon");
    const squidPic = document.createElement("img");
    squidPic.src = SWicon;
    const squidName = document.createElement("div");
    squidName.classList.add("char-name");
    squidName.innerHTML = "Squidward J. Q. Tentacles";
    const squidTitle = document.createElement("div");
    squidTitle.classList.add("char-title");
    squidTitle.innerHTML = "Head of Hospitality";
    squidDiv.appendChild(squidPic);
    squidDiv.appendChild(squidName);
    squidDiv.appendChild(squidTitle);
    teamBoard.appendChild(squidDiv);

    content.appendChild(teamBoard);
}