const aboutUs = document.getElementById('about-us');
const contactUs = document.getElementById('contact-us');
const sectionLeftAboutUs = document.getElementById('section-left-about-us');
const sectionRightAboutUs = document.getElementById('section-right-about-us');
const sectionLeftContactUs = document.getElementById('section-left-contact-us');
const sectionRightContactUs = document.getElementById('section-right-contact-us');

if (localStorage.getItem('aboutUs') === null) {
  sectionLeftAboutUs.style.translate = '-100%';
  sectionRightAboutUs.style.translate = '100%';
}
if (localStorage.getItem('contactUs') === null) {
  sectionLeftContactUs.style.translate = '-100%';
  sectionRightContactUs.style.translate = '100%';
}
window.onscroll = function (e) {
  if (localStorage.getItem('aboutUs') === null) {
    if (window.scrollY >= aboutUs.offsetTop - 250) {
      localStorage.setItem('aboutUs', true);
      sectionLeftAboutUs.style.animation = 'transform-left 1s linear forwards';
    }
    if (window.scrollY >= aboutUs.offsetTop - 300) {
      sectionRightAboutUs.style.animation = 'transform-right 1s linear forwards';
    }
  }
  if (localStorage.getItem('contactUs') === null) {
    
    if (window.scrollY >= contactUs.offsetTop - 300) {
      localStorage.setItem('contactUs', true);
      sectionLeftContactUs.style.animation = 'transform-left 1s linear forwards';
      sectionRightContactUs.style.animation = 'transform-right 1s linear forwards';
    }
  }
}
