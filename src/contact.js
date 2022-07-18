export default function contactPage() {
    console.log('contact tab clicked')
    const mainContent = document.querySelector('main');

    mainContent.replaceChildren();

    const contactTextBox = document.createElement('div');
    contactTextBox.classList.add('contact-text-box');

    const contactTextBoxLine1 = document.createElement('h3');
    contactTextBoxLine1.innerText = 'Questions? Comments? Concerns?'

    const contactTextBoxLine2 = document.createElement('p');
    contactTextBoxLine2.innerText = 'We are happy to answer any questions you have about our kitchen. Please call or email us. We usually respond within 24 hours';

    contactTextBox.append(contactTextBoxLine1, contactTextBoxLine2);

    const phone = document.createElement('h3');
    phone.innerText = "Phone: 555-HERB";
    phone.classList.add('contact-phone');

    const email = document.createElement('p');
    email.innerText = "email: herbivore@ouremail.com";
    email.classList.add('contact-email');

    mainContent.append(contactTextBox, phone, email);

}