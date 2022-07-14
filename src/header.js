import logo from './images/hungryherbivore.png';

export default function loadHeader() {
    const content = document.getElementById('content');

    // create header element
    const header = document.createElement('header');
    header.classList.add('header');

    // create logo to put in header
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.classList.add('header-logo');

    // create restaurant name and catch phrase to put in header
    const nameAndLogoText = document.createElement('div');

    const restName = document.createElement('h1');
    restName.classList.add('logo-text');
    restName.innerText = "The Hungry Herbivore";

    nameAndLogoText.append(restName);

    // create tab section to put in header
    const tabs = document.createElement('ul');
    tabs.classList.add('nav-items')

    const home = document.createElement('li');
    home.classList.add('home-tab');
    home.innerText = 'Home';

    const menu = document.createElement('li');
    menu.classList.add('menu-tab');
    menu.innerText = 'Menu';

    const contact = document.createElement('li');
    contact.classList.add('contact-tab');
    contact.innerText = 'Contact';

    tabs.append(home, menu, contact);

    header.append(logoImg, nameAndLogoText, tabs);
    content.appendChild(header);

    const mainContent = document.createElement('main');
    content.appendChild(mainContent);

    console.log('page load is recognized')
}
