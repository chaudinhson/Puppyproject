import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Dogbreeds from "./Dogbreeds";
import Puppycare from "./Puppycare";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Login from "./Login";
import "./Header.css";
import { useState } from "react";
import BreedsDetails from "./DogBreeds/Breeddetails";
import BathingCare from "./Caretip/BathingCare";
import GroomingCare from "./Caretip/GroomingCare";
import EarsCare from "./Caretip/EarsCare";
import EyeCare from "./Caretip/EyeCare";
import PawCare from "./Caretip/PawCare";
import Dropdown from "react-bootstrap/Dropdown";
import Notfound from "./Notfound";
const Header = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [LoggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleLogout = () => {
    setLoggedInUser(null); // Clear the logged-in user state
    // navigate(-1);// Clear the logged-in user state
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      <div className="Headerbox">
        <div className="Headerlogo">
          <div className="logo">
            <img
              src="https://gin4ever.github.io/eProject/img/logo.svg"
              alt=""
              width="40px"
              height="40px"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
          </div>
          <div className="logotitle">
            <span
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              PATRONA PUPPY
            </span>
          </div>
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
                {LoggedInUser ? (
                  <Dropdown drop="end">
                    <span>{LoggedInUser.username}</span>
                    <Dropdown.Toggle id="dropdown-split-basic" />
                    <Dropdown.Menu id="drop-menu">
                      <Dropdown.Item
                        className="drop-item-1"
                        onClick={handleLogout}
                        id="dropdown-button-dark-example1 "
                      >
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <p onClick={handleLoginClick}>LOGIN</p>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Login
        show={showModal}
        handleClose={handleCloseModal}
        setLoggedInUser={setLoggedInUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dogbreeds" element={<Dogbreeds />} />
        <Route path="/Dogbreeds/:id" element={<BreedsDetails />} />
        <Route path="/Puppycare" element={<Puppycare />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BathingCare" element={<BathingCare />} />
        <Route path="/GroomingCare" element={<GroomingCare />} />
        <Route path="/EarsCare" element={<EarsCare />} />
        <Route path="/EyeCare" element={<EyeCare />} />
        <Route path="/PawCare" element={<PawCare />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
export default Header;
