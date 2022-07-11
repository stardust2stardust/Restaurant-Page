import logo from './images/logo.png';

export default function pageLoad() {
    const content = document.getElementById('content');

    const img = document.createElement('img');
    img.src = logo;

    const headline = document.createElement('h1');
    headline.innerText = "Made with Love";

    const description = document.createElement('h2');
    description.innerText = 'we love making food that you love!'

    content.append(img, headline, description);

    console.log('page load is recognized')
}
