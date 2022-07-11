export default function menuPage() {
    console.log('menu tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();

    const starters = document.createElement('h2');
    starters.innerText = 'Starters';

    const ulStarters = document.createElement('ul');


    const starter1 = document.createElement('li');
    starter1.innerText = 'first starter';

    const starter2 = document.createElement('li');
    starter2.innerText = 'second starter';

    ulStarters.append(starter1, starter2)
    starters.appendChild(ulStarters);

    mainContent.appendChild(starters);

}