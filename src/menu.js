export default function menuPage() {
    console.log('menu tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();

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

    ulStarters.append(starter1, starter2)
    starters.append(startersHeading, ulStarters);
    fullMenu.append(starters)
    mainContent.appendChild(fullMenu);

}