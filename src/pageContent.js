import menuPage from "./menu";
import contactPage from "./contact";

export default function loadPageContent() {
    const menuTab = document.querySelector('.menu-tab')
    menuTab.addEventListener('click', menuPage)

    const contactTab = document.querySelector('.contact-tab');
    contactTab.addEventListener('click', contactPage);

    const backgroundImgCredit = document.createElement('p');
    backgroundImgCredit.innerContent = "Photo by Bruna Branco on Unsplash";

}