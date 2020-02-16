import initSetup from "./setup.js";
import showMenu from "./menu.js";
import showContact from "./contact.js";

initSetup();

const tabContainer = document.querySelector(".tabContainer");
const menuTab = document.querySelector(".menuTab");
const contactTab = document.querySelector(".contactTab");

menuTab.addEventListener("click", (e) =>{
    const tabContentContainer = document.querySelector(".tabContentContainer");
    tabContentContainer.remove();
    tabContainer.appendChild(showMenu());
    contactTab.classList = "contactTab";
    menuTab.classList += " noBorderBot";
});
contactTab.addEventListener("click", (e) =>{
    const tabContentContainer = document.querySelector(".tabContentContainer");
    tabContentContainer.remove();
    tabContainer.appendChild(showContact());
    menuTab.classList = "menuTab";
    contactTab.classList += " noBorderBot";
});

tabContainer.appendChild(showMenu());
menuTab.classList += " noBorderBot";