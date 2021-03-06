const initSetup = () => {
    const content = document.querySelector("#content");

    const banner = document.createElement("img")
    banner.src = "http://www.beachvillasrentals.com/sites/default/files/banner/beach_villas_rentals_banner_10_11.jpg";
    
    const title = document.createElement("h1")
    title.innerHTML = "Rico's BBQ Shack";
    
    const paraOne = document.createElement("p");
    paraOne.innerHTML = "Welcome to Rico's BBQ Shack!";
    const paraTwo = document.createElement("p");
    paraTwo.innerHTML = "Hungry for BBQ? You've arrived at the right place. We pride ourselved on cooking perfect BBQ cuisine, at a stunning sea front location";
    const paraThree = document.createElement("p");
    paraThree.innerHTML = "Stay a while, dine and basque";

    const tabContainer = document.createElement("div");
    tabContainer.classList = "tabContainer";

    const tabTwo = document.createElement("a");
    tabTwo.innerHTML = "Menu";
    tabTwo.classList = "menuTab";
    const tabThree = document.createElement("a");
    tabThree.innerHTML = "Contact";
    tabThree.classList = "contactTab";

    tabContainer.appendChild(tabTwo);
    tabContainer.appendChild(tabThree);

    content.appendChild(banner);
    content.appendChild(title);
    content.appendChild(paraOne);
    content.appendChild(paraTwo);
    content.appendChild(paraThree);
    content.appendChild(tabContainer);

}

export default initSetup;