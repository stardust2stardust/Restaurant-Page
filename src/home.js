import kitchenImage from './images/joanna-boj-MhOoD_h90ks-unsplash.jpg';
import textForAboutSection from './text/aboutUs.txt'

export default function homePage() {
    console.log('home tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();
    mainContent.classList.add('home-main');

    const topDiv = document.createElement('div');
    topDiv.classList.add('home-topDiv');

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('home-bottomDiv')

    const homePageImage = document.createElement('img');
    homePageImage.src = kitchenImage;
    homePageImage.classList.add('home-image');

    // about section
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('section-home');

    const aboutHeading = document.createElement('h2');
    aboutHeading.innerText = 'About Us';

    const aboutText = document.createElement('p');
    aboutText.innerText = textForAboutSection;

    aboutSection.append(aboutHeading, aboutText);

    // hours
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('section-home');

    const hoursHeading = document.createElement('h2');
    hoursHeading.innerText = 'Hours';

    const hoursText = document.createElement('div');
    hoursText.innerHTML =
        '<p>Monday to Friday: 9am - 9pm </p><p>Saturday: 12pm - 10pm</p><p>Sunday: 12pm - 6pm </p>';

    hoursSection.append(hoursHeading, hoursText);

    // location
    const locationSection = document.createElement('div');
    locationSection.classList.add('section-home');

    const locationHeading = document.createElement('h2');
    locationHeading.innerText = "Location";

    const locationText = document.createElement('div');
    locationText.innerHTML = '<p>1234 AtoZ Street</p><p>Paradise, Earth 77777</p>';

    locationSection.append(locationHeading, locationText);

    topDiv.append(homePageImage, aboutSection)
    bottomDiv.append(hoursSection, locationSection);
    mainContent.append(topDiv, bottomDiv);

    // photo credit
    const photoCredit = document.createElement('p');
    photoCredit.innerText = 'photo credit: Joanna Boj (unsplash.com)';
    photoCredit.classList.add('photo-credit');
    mainContent.appendChild(photoCredit);

}