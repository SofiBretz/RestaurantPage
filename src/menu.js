import { images} from './components';

const menu = () => {
    components('h1', 'main', 'homeHeader');
    components('div', 'main', 'menu1Section');
    components('div', 'main', 'menu2Section');

    document.getElementById('homeHeader').innerHTML = 'Menu';

    images('https://i.imgur.com/CEA9SMH.png', 'menu1Section', 'menuOfTheRestaurant' );
};

export default menu;