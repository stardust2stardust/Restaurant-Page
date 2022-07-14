import menuPage from "./menu";
import contactPage from "./contact";
import homePage from "./home";

export default function loadPageContent() {
    const menuTab = document.querySelector('.menu-tab')
    menuTab.addEventListener('click', menuPage)

    const contactTab = document.querySelector('.contact-tab');
    contactTab.addEventListener('click', contactPage);

    const homeTab = document.querySelector('.home-tab');
    homeTab.addEventListener('click', homePage);

    const backgroundImgCredit = document.createElement('p');
    backgroundImgCredit.innerContent = "Photo by Bruna Branco on Unsplash";

}