import home from './home';
import contactUs from './contactUs';
import menu from './menu';
import navBar from './navBar';
import { images} from './components';
import './style.scss';

function pages(page) {

  let currentPage;
  switch (page) {
    case 'Home':
      currentPage = home();
      break;

    case 'Menu':
      currentPage = menu();
      break;

    case 'Contact Us':
      currentPage = contactUs();
      break;

    default:
      currentPage = home();
      break;
  }
  return currentPage;
}

const content= document.getElementById('content');
content.innerHTML += navBar;

const nav = document.getElementById('nav');
const container = document.createElement('div');

container.classList.add('container');
content.appendChild(container)

const imageContainer = document.createElement('img');
imageContainer.style.width = '100%';
imageContainer.style.height = 'auto';
imageContainer.src = pages().image();
container.appendChild(imageContainer);

nav.addEventListener('click', (e) => {
  const text = e.target.textContent;
  imageContainer.src = pages(text).image();
  console.log( pages(text).name() );
  console.log( pages(text).image() );
})