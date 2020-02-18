import imageLink from "../images/restaurant.jpg";

const ContactUs = () => {
  const name = () => "Contact Us";

  const form = () =>
    `<div id= "formContainer">
        <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
    
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Text</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>`;
  const image = () => imageLink;

  return {name, form, image};
};

export default ContactUs;
