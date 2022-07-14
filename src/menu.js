import menuImage from './images/monika-grabkowska-leafygreens.jpg'

export default function menuPage() {
    console.log('menu tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menuSideImage = document.createElement('img');
    menuSideImage.src = menuImage;
    menuSideImage.classList.add('menu-side-image');

    const fullMenu = document.createElement('div');
    fullMenu.classList.add('full-menu');

    const starters = document.createElement('div');
    starters.classList.add('section')

    const startersHeading = document.createElement('h2');
    startersHeading.innerText = 'Starters';

    const ulStarters = document.createElement('ul');
    ulStarters.classList.add('menu-items');


    const starter1 = document.createElement('li');
    starter1.innerText = 'first starter';

    const starter2 = document.createElement('li');
    starter2.innerText = 'second starter';

    const sammies = document.createElement('div');
    sammies.classList.add('section');

    const sammiesHeading = document.createElement('h2');
    sammiesHeading.innerText = 'Sammies';

    const ulSammies = document.createElement('ul');
    ulSammies.classList.add('menu-items');

    const sammy1 = document.createElement('li');
    sammy1.innerText = 'Sammy 1';

    const sammy2 = document.createElement('li');
    sammy2.innerText = 'Sammy 2';

    ulStarters.append(starter1, starter2)
    ulSammies.append(sammy1, sammy2)
    starters.append(startersHeading, ulStarters);
    sammies.append(sammiesHeading, ulSammies)
    fullMenu.append(starters, sammies)
    menuDiv.append(menuSideImage, fullMenu)
    mainContent.appendChild(menuDiv);

}