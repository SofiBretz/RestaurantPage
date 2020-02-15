import imageLink from '../images/burger.jpg';

const Menu = () => {
  const name = () => 'Menu';

  

  const rowMenu= 
    `<div class="container">
        <div class="row">
          <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        <div class="col-md-4">
            <img width= "200px" height= "200px" src="../images/burger.jpg">
            <p>description</p>
            <h4>price</h4>
        </div>
        </div>
      </div>`

      const image = () => rowMenu;
      return { name, image};
};

export default Menu;