import render from './render';
import home from './home';
import contactUs from './contactUs';
import menu from './menu';
import components from './components';

const layers = (name, divName) => {
  const btn = document.createElement('buttonLayer');
  const div = document.getElementById(divName);
  btn.innerHTML= name;
  btn.setAttribute('id', name);
  div.appendChild(btn);
};

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

  function template(id) {
    render();
    pages(id);
  }

  function buttonTab() {
    const btnHome = document.getElementById('Home');
    const btnMenu = document.getElementById('Menu');
    const btnContactUs = document.getElementById('Contact Us');
  }

  function display () {
    const subject = document.getElementById('subject');
    element('div', 'subject', 'firstSection');
    element('div', 'firstSection', 'layer');
    element('div', 'subject', 'main');
  }
}

display();
template('Home');