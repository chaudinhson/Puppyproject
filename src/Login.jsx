import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ show, handleClose, setLoggedInUser }) => {
  const [showbox, setshowbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupname, setSignupname] = useState("");
  const [signuppassword, setSignuppassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // example@example.com
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Password123||Password must have at least one letter, at least one number, and at least eight characters.
  const isValidSignupEmail = emailPattern.test(signupname);
  const isValidSignupPassword = passwordPattern.test(signuppassword);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const userdata = {
    username: signupname,
    password: signuppassword,
  };
  const HandleSignup = () => {
    if (isValidSignupEmail && isValidSignupPassword) {
      if (signuppassword === confirmpassword) {
        fetch("https://65d55bd63f1ab8c63436c752.mockapi.io/userdata", {
          method: "POST",
          headers: { "content-type": "application/json" },
          // Send your data in the request body as JSON
          body: JSON.stringify(userdata),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            // handle error
          })
          .then((task) => {
            // do something with the new task
          })
          .catch((error) => {
            // handle error
          });
      } else {
        alert("Password and confirm password are not match");
      }
      setSignupname("");
      setSignuppassword("");
      setConfirmpassword("");
    } else {
      if (!isValidSignupEmail) {
        alert("Invalid Email||Ex:example@example.com");
      }
      if (!isValidSignupPassword) {
        alert("Invalid Password||Ex:Password123");
      }
    }
  };
  const HandleLogin = async () => {
    try {
      // Fetch sign-up data from the API
      const response = await fetch(
        "https://65d55bd63f1ab8c63436c752.mockapi.io/userdata"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch sign-up data");
      }
      const userData = await response.json();

      // Check if the entered credentials match the sign-up data
      const foundUser = userData.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        // Successful login
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        console.log("Login successful");
        setLoggedInUser(foundUser);
        navigate("/");
        handleClose();
        setUsername("");
        setPassword("");
        setError("");
      } else {
        // Unsuccessful login
        setError("Wrong Email or Password!!!");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to log in. Please try again later.");
    }
  };

  const HandleLoginKeydown = (e) => {
    if (e.key === "Enter") {
      HandleLogin();
    }
  };
  const HandleSignupKeydown = (e) => {
    if (e.key === "Enter") {
      HandleSignup();
    }
  };

  const Handlesignin = () => {
    setshowbox(false);
  };
  const Handlesignup = () => {
    setshowbox(true);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <>
      <Modal
        id="loginmodal"
        show={show}
        onHide={handleClose}
        className={show ? "fade-in" : "fade-out"}
        animation={false}
      >
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>
            <span onClick={Handlesignin} className="signintitle">
              Sign up
            </span>
            <span onClick={Handlesignup} className="signuptitle ">
              Login
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={showbox ? "signinbox" : "signinbox hiden"}>
            <div className="userbox">
              <input
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                type="email"
                name="username"
                id="username"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span class="material-symbols-outlined">person</span>
            </div>
            <div className="passwordbox">
              <input
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                type={showPassword ? "text" : "password"}
                name="signinpassword"
                id="signinpassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={HandleLoginKeydown}
              />
              <span
                onClick={togglePasswordVisibility}
                class="material-symbols-outlined"
              >
                visibility
              </span>
            </div>

            <div className="submitbox">
              <Button variant="primary" type="submit" onClick={HandleLogin}>
                Login
              </Button>
              {error && <p className="error-text">{error}</p>}

              <div className="fbggbox">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_103_3710)">
                    <path
                      d="M25.5 13.0217C25.5 6.14502 19.9035 0.570312 13 0.570312C6.09648 0.570312 0.5 6.14492 0.5 13.0217C0.5 19.2365 5.07109 24.3877 11.0469 25.3218V16.6209H7.87305V13.0217H11.0469V10.2785C11.0469 7.15786 12.9131 5.43413 15.7683 5.43413C17.1359 5.43413 18.5664 5.67732 18.5664 5.67732V8.74152H16.9902C15.4373 8.74152 14.9531 9.70134 14.9531 10.6861V13.0217H18.4199L17.8657 16.6209H14.9531V25.3218C20.9289 24.3877 25.5 19.2366 25.5 13.0217Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M17.8657 16.6209L18.4199 13.0216H14.9531V10.686C14.9531 9.7012 15.4374 8.74148 16.9902 8.74148H18.5664V5.67727C18.5664 5.67727 17.1359 5.43408 15.7683 5.43408C12.9131 5.43408 11.0469 7.15782 11.0469 10.2784V13.0216H7.87305V16.6209H11.0469V25.3217C11.693 25.4226 12.346 25.4732 13 25.473C13.654 25.4732 14.307 25.4226 14.9531 25.3217V16.6209H17.8657Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_3710">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_103_3714)">
                    <path
                      d="M9.20898 1.32235C6.71109 2.18889 4.55692 3.83361 3.06287 6.01493C1.56882 8.19625 0.813652 10.7992 0.908283 13.4414C1.00291 16.0836 1.94236 18.6259 3.58862 20.6947C5.23489 22.7636 7.5012 24.25 10.0547 24.9356C12.1248 25.4698 14.2938 25.4933 16.375 25.004C18.2604 24.5805 20.0035 23.6746 21.4336 22.3751C22.922 20.9812 24.0024 19.208 24.5586 17.2462C25.1629 15.1127 25.2705 12.8691 24.873 10.6876H13.248V15.5098H19.9805C19.8459 16.279 19.5576 17.013 19.1327 17.6681C18.7078 18.3232 18.1552 18.8858 17.5078 19.3223C16.6858 19.8664 15.759 20.2323 14.7871 20.3966C13.8124 20.5779 12.8126 20.5779 11.8379 20.3966C10.8499 20.1925 9.91531 19.7848 9.09375 19.1993C7.77372 18.2649 6.78257 16.9374 6.26171 15.4063C5.7322 13.8465 5.7322 12.1556 6.26171 10.5958C6.63247 9.50246 7.24537 8.50699 8.05468 7.68367C8.98084 6.7242 10.1534 6.03836 11.4437 5.7014C12.7339 5.36445 14.0921 5.3894 15.3691 5.77352C16.3668 6.07962 17.2791 6.61469 18.0332 7.33602C18.7923 6.58081 19.5501 5.82365 20.3066 5.06453C20.6973 4.65633 21.123 4.26766 21.5078 3.84969C20.3565 2.77844 19.0052 1.94482 17.5312 1.39656C14.8471 0.421935 11.9101 0.395743 9.20898 1.32235Z"
                      fill="white"
                    />
                    <path
                      d="M9.20898 1.32232C11.9099 0.395086 14.8469 0.420589 17.5312 1.39458C19.0055 1.94656 20.3562 2.78419 21.5059 3.85943C21.1152 4.2774 20.7031 4.66802 20.3047 5.07427C19.5469 5.83078 18.7897 6.58469 18.0332 7.33599C17.2791 6.61466 16.3668 6.07959 15.3691 5.77349C14.0925 5.38802 12.7344 5.36163 11.4438 5.69721C10.1532 6.03278 8.97991 6.71736 8.05273 7.67583C7.24342 8.49915 6.63052 9.49462 6.25977 10.5879L2.21094 7.45318C3.66017 4.57927 6.16943 2.38096 9.20898 1.32232Z"
                      fill="#E33629"
                    />
                    <path
                      d="M1.13671 10.5586C1.35417 9.48002 1.71547 8.43553 2.21093 7.45312L6.25976 10.5957C5.73025 12.1555 5.73025 13.8464 6.25976 15.4062C4.9108 16.4479 3.56119 17.4948 2.21093 18.5469C0.970992 16.0787 0.592832 13.2666 1.13671 10.5586Z"
                      fill="#F8BD00"
                    />
                    <path
                      d="M13.2481 10.6855H24.8731C25.2705 12.8671 25.1629 15.1106 24.5586 17.2441C24.0024 19.206 22.922 20.9792 21.4336 22.373C20.127 21.3535 18.8145 20.3418 17.5078 19.3223C18.1556 18.8853 18.7085 18.3221 19.1334 17.6663C19.5583 17.0105 19.8464 16.2757 19.9805 15.5059H13.2481C13.2461 13.9004 13.2481 12.293 13.2481 10.6855Z"
                      fill="#587DBD"
                    />
                    <path
                      d="M2.20898 18.5469C3.55924 17.5052 4.90885 16.4583 6.25781 15.4062C6.7797 16.9379 7.77228 18.2654 9.09375 19.1992C9.91787 19.782 10.8545 20.1864 11.8438 20.3867C12.8185 20.568 13.8183 20.568 14.793 20.3867C15.7649 20.2224 16.6917 19.8565 17.5137 19.3125C18.8203 20.332 20.1328 21.3438 21.4395 22.3633C20.0096 23.6635 18.2664 24.5701 16.3809 24.9941C14.2996 25.4834 12.1307 25.46 10.0605 24.9258C8.42325 24.4886 6.8939 23.718 5.56836 22.6621C4.16548 21.5481 3.0196 20.1444 2.20898 18.5469Z"
                      fill="#319F43"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_103_3714">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className={showbox ? "signupbox hiden" : "signupbox"}>
            <div className="userbox">
              <input
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                type="email"
                name="signupusername"
                id="signupusername"
                placeholder="Email "
                value={signupname}
                onChange={(e) => setSignupname(e.target.value)}
              />
              <span class="material-symbols-outlined">person</span>
            </div>

            <div className="passwordbox">
              <input
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                type={showPassword ? "text" : "password"}
                name="signuppassword"
                id="signuppassword"
                placeholder="Password"
                value={signuppassword}
                onChange={(e) => setSignuppassword(e.target.value)}
              />
              <span
                onClick={togglePasswordVisibility}
                class="material-symbols-outlined"
              >
                visibility
              </span>
            </div>
            <div className="passwordbox">
              <input
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                type={showPassword2 ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
                onKeyDown={HandleSignupKeydown}
              />
              <span
                onClick={togglePasswordVisibility2}
                class="material-symbols-outlined"
              >
                visibility
              </span>
            </div>
            <div className="submitbox">
              <Button variant="primary" type="submit" onClick={HandleSignup}>
                Sign Up
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
