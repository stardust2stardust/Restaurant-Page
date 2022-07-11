export default function contactPage() {
    console.log('contact tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();

    const phone = document.createElement('h3');
    phone.innerText = "555-LOVE";
    phone.classList.add('contact-phone');

    const email = document.createElement('p');
    email.innerText = "withlove@ouremail.com";
    email.classList.add('contact-email');

    mainContent.append(phone, email);

}