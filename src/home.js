import { images} from './components';

const home = () => {
    components('h1', 'main', 'homeHeader');
    components('div', 'main', 'fiorellaSection');
    components('div', 'main', 'restaurantSection');

    document.getElementById('homeHeader').innerHTML = "Fiorella's Restaurant";

    images('https://i.imgur.com/CEA9SMH.png', 'fiorellaSection', 'FiorellaRestaurant' );




};

export default home;