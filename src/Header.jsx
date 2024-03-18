import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Dogbreeds from "./Dogbreeds";
import Puppycare from "./Puppycare";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Login from "./Login";
import "./Header.css";
import { useState } from "react";
import BreedsDetails from "./DogBreeds/Breeddetails";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Router>
        <div className="Headerbox">
          <div className="Headerlogo">
            <div className="logo">
              <img
                src="https://gin4ever.github.io/eProject/img/logo.svg"
                alt=""
                width="40px"
                height="40px"
              />
            </div>
            <div className="logotitle">PATRONA PUPPY</div>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/Dogbreeds">DOG BREEDS</Link>
                </li>
                <li>
                  <Link to="/Puppycare">PUPPY CARE</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="/Contact">CONTACT</Link>
                </li>
                <li>
                  <p onClick={handleLoginClick}>LOGIN</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Login show={showModal} handleClose={handleCloseModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dogbreeds" element={<Dogbreeds />} />
          <Route path="/Dogbreeds/:id" element={<BreedsDetails />} />
          <Route path="/Puppycare" element={<Puppycare />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default Header;
