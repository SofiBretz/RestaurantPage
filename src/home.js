import imageLink from '../images/fiorella.jpg';

const Home = () => {
  const name = () => 'Home';

  const welcome = () => `<div id= "welcome">
    <h1>Welcome to Fiorella's Restaurant</h1>
    <p>Enjoy this magnificent gourmet meal</p>
  </div>`;

  const image = () => imageLink;
  return { name, image, welcome };
};

export default Home;
