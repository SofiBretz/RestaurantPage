import imageLink from '../images/burger.jpg';

const Menu = () => {
  const name = () => 'Menu';

  

  const rowMenu= 
    `<div class="container">
        <div class="row menu">
          <div class="col-md-4 ">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/burger.jpg">
            <p>The best Burger you can eat! </p>
            <h4>$20</h4>
        </div>
        <div class="col-md-4">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/pasta.jpg">
            <p>Italian pasta, made with special ingredients </p>
            <h4>$18</h4>
        </div>
        <div class="col-md-4">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/onion.jpg">
            <p>The best onion soup! Homemade soup, delicious! </p>
            <h4>$18</h4>
        </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/vegetarian.jpg">
            <p>For veggies! here is a very good option! </p>
            <h4>$20</h4>
        </div>
        <div class="col-md-4">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/pancakes.jpg">
            <p>Why not? This pancakes are so yummy! </p>
            <h4>$15</h4>
        </div>
        <div class="col-md-4">
            <img class= "menuImg" width= "300px" height= "200px" src="../images/cannel.jpg">
            <p>Swidish receipt</p>
            <h4>$17</h4>
        </div>
        </div>
      </div>`

      const image = () => rowMenu;
      return { name, image};
};

export default Menu;