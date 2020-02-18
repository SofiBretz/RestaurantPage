import imageLink from "../images/burger.jpg";

const Menu = () => {
  const name = () => "Menu";

  const rowMenu = `<div class="container">
        <div class="row">
          <div id="colSize" class="col-md-max ">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/burger.jpg">
            <p>The best Burger you can eat! </p>
            <h4>$20</h4>
          </div>
        </div>

        <div class="row">
        <div id="colSize" class="col-md-max">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/pasta.jpg">
            <p>Italian pasta, made with special ingredients </p>
            <h4>$18</h4>
          </div>
        </div>

        <div class="row">
        <div id="colSize" class="col-md-max">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/onion.jpg">
            <p>Homemade onion soup, delicious! </p>
            <h4>$18</h4>
            </div>
          </div>

        <div class="row">
          <div id="colSize" class="col-md-max">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/vegetarian.jpg">
            <p>For veggies! Here is a very good option! </p>
            <h4>$20</h4>
          </div>
        </div>

        <div class="row">
        <div id="colSize" class="col-md-max">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/pancakes.jpg">
            <p>Why not? This pancakes are so yummy! </p>
            <h4>$15</h4>
          </div>
        </div>

        <div class="row">
        <div id="colSize" class="col-md-max">
            <img class= "menuImg" width= "640px" height= "480px" src="../images/cannel.jpg">
            <p>Kanelbullar, Swidish receipt</p>
            <h4>$17</h4>
        </div>
        </div>
      </div>`;

  const image = () => rowMenu;
  return { name, image };
};

export default Menu;
