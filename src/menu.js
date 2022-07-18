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
    starter1.innerText = 'Tofu Fritters';

    const starter1Description = document.createElement('p');
    starter1Description.innerText = 'Thinly sliced tofu dipped in batter & fried to perfection. Served with spicy sauce.'
    starter1Description.classList.add('menu-item-description')

    starter1.appendChild(starter1Description);

    const starter2 = document.createElement('li');
    starter2.innerText = 'Stuffed Mushrooms';

    const starter2Description = document.createElement('p');
    starter2Description.innerText = 'Mushroom caps stuffed with a mixture of roasted peppers, onions, fennel and cheeze. Yum!'
    starter2Description.classList.add('menu-item-description');

    starter2.appendChild(starter2Description);

    const sammies = document.createElement('div');
    sammies.classList.add('section');

    const sammiesHeading = document.createElement('h2');
    sammiesHeading.innerText = 'Sammies';

    const ulSammies = document.createElement('ul');
    ulSammies.classList.add('menu-items');

    const sammy1 = document.createElement('li');
    sammy1.innerText = 'PBLT';

    const sammy1Description = document.createElement('p');
    sammy1Description.innerText = 'Layers of tomato and lettuce stacked between pretzel buns smeared with peanut butter. Served with chips.';
    sammy1Description.classList.add('menu-item-description');

    sammy1.appendChild(sammy1Description);

    const sammy2 = document.createElement('li');
    sammy2.innerText = 'BBQ Jackfruit';

    const sammy2Description = document.createElement('p');
    sammy2Description.innerText = 'Saucy, shredded jackfruit topped with fries and slaw. Served with tots.'
    sammy2Description.classList.add('menu-item-description');

    sammy2.appendChild(sammy2Description);

    ulStarters.append(starter1, starter2)
    ulSammies.append(sammy1, sammy2)
    starters.append(startersHeading, ulStarters);
    sammies.append(sammiesHeading, ulSammies)
    fullMenu.append(starters, sammies)
    menuDiv.append(menuSideImage, fullMenu)
    mainContent.appendChild(menuDiv);

}