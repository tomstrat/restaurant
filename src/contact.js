const showContact = () => {
    const tabContainer = document.querySelector(".tabContainer");

    const contactHolder = document.createElement("div");
    contactHolder.classList = "tabContentContainer";

    const contactTitle = document.createElement("h2");
    menuTitle.innerHTML = "Contact";

    const phone = document.createElement("h3");
    phone.innerHTML = "Phone:"
    const phoneNumber = document.createElement("p");
    phoneNumber.innerHTML = "01179 231122";
    
    const email = document.createElement("h3");
    email.innerHTML = "Email:";
    const emailAddress = document.createElement("p");
    emailAddress.innerHTML = "rico@ricobbqshack.com";

    const address = document.createElement("h3");
    address.innerHTML = "Address:";
    const addressOne = document.createElement("p");
    addressOne.innerHTML = "12 Bombay Beach";
    const addressTwo = document.createElement("p");
    addressTwo.innerHTML = "Carter Crecsent";
    const addressThree = document.createElement("p");
    addressThree.innerHTML = "Austrailia";
    const addressFour = document.createElement("p");
    addressFour.innerHTML = "AU19 2XQ";

}