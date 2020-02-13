import render from './render';
import home from './home';
import contactUs from './contactUs';
import menu from './menu';
import components from './components';

const layers = () => {
  //images and buttons for layers here
}

function display () {

  const subject = document.getElementById('subject');

  element('div', 'subject', 'firstSection');
  element('div', 'firstSection', 'layer');
  element('div', 'subject', 'main');
}

function pages (pag) {

  switch (pag) {
  case 'Home':
    home();
    break;
  
  case 'Menu':
    menu();
    break;

  case 'Contact Us':
    contactUs();
    break;

  default:
    home();
    break;
 
  }
}

display();