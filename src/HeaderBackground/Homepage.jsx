import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Homepage = () => {
  return (
    <div className="backgroundbox kenburns-top-right ">
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption className="items text-from-bottom">
            <h3>A FRIEND OF US</h3>
            <p>
              Through the ages, people have claimed dogs as one of their
              closest, and best, companions. Of all the domesticated animals,
              dogs serve the widest array of roles: protector, helper,
              lifesaver, and companion.
            </p>
            <br />
            {/* <p className="explore">LET’S EXPLORE</p> */}
          </Carousel.Caption>
          <img src="./img/headerimages/homepage1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/headerimages/slide1.jpg" alt="Second slide" />
          <Carousel.Caption className="items text-from-bottom">
            <h3>A FAMILY OF US</h3>
            <p>
              More and more often, animals are included in family events and
              become important to all members of the family.
            </p>
            <br />
            {/* <p className="explore">LET’S EXPLORE</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Homepage;
