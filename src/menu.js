const showMenu = () => {

    const menuHolder = document.createElement("div");
    menuHolder.classList = "tabContentContainer";

    const menuTitle = document.createElement("h2");
    menuTitle.innerHTML = "Menu";

    const starter = document.createElement("h3");
    starter.innerHTML = "Starters";

    const starterOne = document.createElement("p");
    starterOne.innerHTML = "Hot Wings";
    const starterTwo = document.createElement("p");
    starterTwo.innerHTML = "Mussels";
    const starterThree = document.createElement("p");
    starterThree.innerHTML = "Calamari";

    const main = document.createElement("h3");
    main.innerHTML = "Main Course";

    const mainOne = document.createElement("p");
    mainOne.innerHTML = "BBQ Pulled Pork Burger";
    const mainTwo = document.createElement("p");
    mainTwo.innerHTML = "Fillet Steak";
    const mainThree = document.createElement("p");
    mainThree.innerHTML = "Rico's Big One";

    menuHolder.appendChild(menuTitle);
    menuHolder.appendChild(starter);
    menuHolder.appendChild(starterOne);
    menuHolder.appendChild(starterTwo);
    menuHolder.appendChild(starterThree);
    menuHolder.appendChild(main);
    menuHolder.appendChild(mainOne);
    menuHolder.appendChild(mainTwo);
    menuHolder.appendChild(mainThree);

    return menuHolder;
}

export default showMenu;