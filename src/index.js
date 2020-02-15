import home from './home';
import contactUs from './contactUs';
import menu from './menu';
import navBar from './navBar';
import { images} from './components';
import './style.scss';

/*const layers = (name, divName) => {
  const btn = document.createElement('button');
  const div = document.getElementById(divName);
  btn.innerHTML= name;
  btn.setAttribute('id', name);
  div.appendChild(btn);
};

const content= document.getElementById('content');
content.textContent= '2';

function pages(pag) {

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
    pages(id);
  }

  function buttonTab() {
    const btnHome = document.getElementById('Home');
    const btnMenu = document.getElementById('Menu');
    const btnContactUs = document.getElementById('Contact Us');
  }
*/
  function display () {


    
    //components('div', subject, 'firstSection');
    return subject;
    /*
    components('div', 'firstSection', 'layer');
    components('div', 'subject', 'main');

    components('div', 'layer', 'buttons');
    layers('About', 'buttons');
    layers('Menu', 'buttons');
    layers('Contact', 'buttons');
  
    buttonTab();*/
  }
console.log(display());
content.innerHTML= navBar();
