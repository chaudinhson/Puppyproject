import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="boxup">
        <div className="boxupleft">
          <div className="logo">
            <img
              src="https://gin4ever.github.io/eProject/img/logo.svg"
              alt=""
              width="60px"
              height="60px"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
          </div>
          <div>
            <span
              className="logotitle"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              PATRONA PUPPY
            </span>
          </div>
        </div>
        <div className="boxupright">
          <div className="right1">
            <h4>Menu</h4>
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                HOME
              </li>
              <li
                onClick={() => {
                  navigate("/Dogbreeds");
                  window.scrollTo(0, 0);
                }}
              >
                DOG BREEDS
              </li>
              <li
                onClick={() => {
                  navigate("/Puppycare");
                  window.scrollTo(0, 0);
                }}
              >
                PUPPY CARE
              </li>
              <li
                onClick={() => {
                  navigate("/FAQ");
                  window.scrollTo(0, 0);
                }}
              >
                FAQ
              </li>
              <li
                onClick={() => {
                  navigate("/Contact");
                  window.scrollTo(0, 0);
                }}
              >
                CONTACT
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                LOGIN
              </li>
            </ul>
          </div>
          <div className="right2">
            <h4>Contact</h4>
            <p>Group2@gmail.com</p>
            <p>+012-345-6789</p>
            <p>1234 Main St, New York, NY 10001</p>
          </div>
          <div className="right3">
            <h4>Social</h4>
            <div className="socicalbox">
              <div>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.75" r="18" fill="#333333" />
                  <path
                    d="M24.5 15.405C24.059 15.601 23.584 15.733 23.086 15.793C23.595 15.488 23.984 15.006 24.169 14.431C23.693 14.713 23.166 14.918 22.605 15.028C22.157 14.549 21.516 14.25 20.809 14.25C19.219 14.25 18.051 15.733 18.41 17.273C16.365 17.17 14.55 16.19 13.336 14.701C12.691 15.807 13.002 17.255 14.098 17.988C13.695 17.975 13.316 17.864 12.984 17.68C12.957 18.82 13.775 19.887 14.959 20.125C14.613 20.219 14.233 20.241 13.847 20.167C14.16 21.145 15.071 21.856 16.147 21.876C15.11 22.688 13.807 23.051 12.5 22.897C13.59 23.596 14.883 24.003 16.273 24.003C20.845 24.003 23.427 20.142 23.271 16.679C23.753 16.333 24.17 15.899 24.5 15.405Z"
                    fill="#EDB24E"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.75" r="18" fill="#333333" />
                  <path
                    d="M16.75 16.75H14.75V18.75H16.75V24.75H19.75V18.75H21.57L21.75 16.75H19.75V15.917C19.75 15.439 19.846 15.25 20.308 15.25H21.75V12.75H19.346C17.548 12.75 16.75 13.542 16.75 15.058V16.75Z"
                    fill="#EDB24E"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.75" r="18" fill="#333333" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 12.75C16.87 12.75 16.667 12.757 16.026 12.787C13.846 12.887 12.636 14.096 12.536 16.276C12.507 16.917 12.5 17.121 12.5 18.75C12.5 20.38 12.507 20.584 12.536 21.224C12.636 23.403 13.846 24.614 16.026 24.714C16.667 24.743 16.87 24.75 18.5 24.75C20.13 24.75 20.334 24.743 20.975 24.714C23.151 24.614 24.366 23.405 24.464 21.224C24.493 20.584 24.5 20.38 24.5 18.75C24.5 17.121 24.493 16.917 24.464 16.276C24.366 14.099 23.155 12.886 20.975 12.787C20.334 12.757 20.13 12.75 18.5 12.75ZM18.5 13.8322C20.102 13.8322 20.292 13.8382 20.925 13.8672C22.552 13.9412 23.31 14.7122 23.385 16.3262C23.413 16.9592 23.419 17.1482 23.419 18.7502C23.419 20.3522 23.413 20.5422 23.385 21.1742C23.31 22.7872 22.553 23.5602 20.925 23.6342C20.292 23.6622 20.103 23.6692 18.5 23.6692C16.898 23.6692 16.708 23.6632 16.076 23.6342C14.446 23.5592 13.691 22.7852 13.616 21.1742C13.588 20.5422 13.581 20.3522 13.581 18.7502C13.581 17.1482 13.588 16.9582 13.616 16.3262C13.69 14.7112 14.448 13.9402 16.076 13.8662C16.708 13.8372 16.898 13.8322 18.5 13.8322ZM15.4187 18.7501C15.4187 17.0481 16.7987 15.6691 18.4997 15.6691C20.2007 15.6691 21.5807 17.0491 21.5807 18.7501C21.5807 20.4521 20.2007 21.8311 18.4997 21.8311C16.7987 21.8311 15.4187 20.4521 15.4187 18.7501ZM18.4998 20.7498C17.3948 20.7498 16.4998 19.8548 16.4998 18.7498C16.4998 17.6458 17.3948 16.7498 18.4998 16.7498C19.6038 16.7498 20.5008 17.6448 20.5008 18.7498C20.5008 19.8548 19.6038 20.7498 18.4998 20.7498ZM20.982 15.5479C20.982 15.1499 21.305 14.8279 21.702 14.8279C22.101 14.8279 22.423 15.1499 22.423 15.5479C22.423 15.9459 22.1 16.2679 21.702 16.2679C21.304 16.2679 20.982 15.9449 20.982 15.5479Z"
                    fill="#EDB24E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boxdown">
        <div className="boxdownleft">
          <p>Copyright ©</p>
          <p>Group2 from T1.2311.M0 </p>
        </div>
        <div className="boxdownright">
          <div className="downright1">
            <span>Terms of Use</span>
          </div>
          <div className="downright2">
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
