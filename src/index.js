import initSetup from "./setup.js";
import showMenu from "./menu.js";

initSetup();

const tabContainer = document.querySelector(".tabContainer");


tabContainer.appendChild(showMenu());