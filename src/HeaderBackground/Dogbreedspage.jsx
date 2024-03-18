import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
const Dogbreedspage = () => {
  return (
    <div className="backgroundbox">
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption className="items text-from-bottom">
            <h3>A LIBRARY OF DOGS BREEDS</h3>
            <p>
              How to know more about your four leg friend? How to know more dog
              breeds?
              <br />
              Good new, we have a big library hear!
            </p>
            <br />
            <p className="explore">LET’S EXPLORE</p>
          </Carousel.Caption>
          <img
            className="dogbreeds1"
            src="./img/headerimages/breeds1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/headerimages/breeds2.jpg" alt="Second slide" />
          <Carousel.Caption className="items text-from-bottom">
            <h3>A LIBRARY OF DOGS BREEDS</h3>
            <p>
              For each breed you can find out more about their history and
              personality, location, etc. From giant dog breeds that offer
              plenty more pup to love to adorable toy types, our extensive dog
              breed library covers various types and categories. Let's explore
              together!
            </p>
            <br />
            <p className="explore">LET’S EXPLORE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Dogbreedspage;
