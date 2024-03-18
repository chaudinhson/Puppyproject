import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
const Puppycarepage = () => {
  return (
    <div className="backgroundbox">
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption className="items text-from-bottom">
            <h3>PUPPY CARE</h3>
            <p>
              A complete “puppy spa” entails grooming from head to paw, whether
              by you, a professional groomer or your veterinarian. Dog grooming
              isn’t just about making your puppy look good it is also an
              opportunity to check your puppy’s general health.
            </p>
            <br />
            <p className="explore">LET’S EXPLORE</p>
          </Carousel.Caption>
          <img
            src="./img/headerimages/care2.jpg"
            alt="First slide"
            className="care2img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/headerimages/care1.png" alt="Second slide" />
          <Carousel.Caption className="items text-from-bottom">
            <h3>PUPPY CARE</h3>
            <p>
              "Puppy care" is a rewarding journey, ensuring your new furry
              family member's happiness and health. It involves creating a safe
              space, providing proper nutrition, and engaging in playtime for
              their development.It's not just a responsibility; it's a joyous
              and lasting companionship.
            </p>
            <br />
            <p className="explore">LET’S EXPLORE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Puppycarepage;
