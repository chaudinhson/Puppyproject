import Puppycarepage from "../HeaderBackground/Puppycarepage";
import { useNavigate } from "react-router-dom";
import "../Caretip/Caretip.css";
const BathingCare = () => {
  const navigate = useNavigate();
  return (
    <div className="bathingtip_box">
      <Puppycarepage />
      <div className="container ">
        <div className="bathingtipnav_bar">
          <div className="inner-bathingtipnav_bar">
            <span
              onClick={() => {
                navigate("/PuppyCare");
              }}
            >
              Puppy Care/
            </span>
            <span
              onClick={() => {
                window.location.reload();
              }}
            >
              Bathing Tips
            </span>
          </div>
          <hr />
        </div>
        <div className="bathingtip_section  row">
          <div className="bathingtip_section_left col-xl-5">
            <h3>Video Tutorial</h3>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/alF-r5DlERY?si=8frJtJwPXXEXaO1C"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div class="grid-container">
              <div className="inner-grid-container">
                <div class="grid-item">
                  <img
                    id="grid-item-img1"
                    src="./img/care/Bathing/breath1.jpg"
                    alt="Image 1"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img2"
                    src="./img/care/Bathing/breath2.jpg"
                    alt="Image 2"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img3"
                    src="./img/care/Bathing/breath3.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="inner-grid-container2">
                <div class="grid-item">
                  <img
                    id="grid-item-img4"
                    src="./img/care/Bathing/breath4.jpg"
                    alt="Image 4"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img5"
                    src="./img/care/Bathing/breath5.jpg"
                    alt="Image 5"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img6"
                    src="./img/care/Bathing/breath6.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bathingtip_section_right col-xl-7">
            <h3>Bathing Tips</h3>
            <ul>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Choose the right bathing products:</span> Use shampoo
                  and conditioner specifically designed for dogs. Avoid using
                  human bathing products as they may irritate the dog's skin.
                </span>
              </li>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Check the water temperature:</span> Ensure the water you
                  use for bathing your dog is not too hot or too cold. Lukewarm
                  water is the best choice, similar to the temperature you would
                  use for bathing a baby.
                </span>
              </li>
              <div className="freestylingimg">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Prepare beforehand:</span> Before starting to bathe
                      your dog, prepare all necessary tools such as towels,
                      shampoo, and a water pitcher.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Discuss the bathtub:</span> If possible, use a
                      bathtub with a suitable height so you can bathe the dog
                      without bending too much, reducing strain on your back.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/bathingcare2.jpg"
                  alt=""
                  height="300px"
                />
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Inspect the coat and skin:</span> Before bathing, check
                  the dog's coat and skin for any signs of skin fungus or other
                  health issues.
                </span>
              </li>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Bathe regularly but not too often:</span> Depending on
                  the type of skin and coat your dog has, bathing once or twice
                  a month is sufficient. Bathing too frequently can strip the
                  natural oils from the dog's skin, causing skin issues.
                </span>
              </li>
              <div className="freestylingimg2">
                <img
                  src="./img/care/Bathing/bathingcare3.jpg"
                  alt=""
                  height="200"
                />
                <div style={{ marginLeft: "10px" }}>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Pay attention to ears and eyes:</span> Always keep
                      water and shampoo out of the dog's ears and eyes. Use a
                      damp cloth to wipe these areas clean.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Dry carefully:</span> Use a hairdryer to dry the
                      dog, but keep the temperature low to avoid damaging the
                      dog's skin.
                    </span>
                  </li>
                </div>
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Reward the dog:</span> After bathing, make sure to
                  reward the dog with some special treats or by playing with it.
                  This helps the dog associate bathing with a positive
                  experience.
                </span>
              </li>
            </ul>
            <p>
              <span>Remember</span> that each dog may have different needs and
              reactions to bathing, so always observe and adjust your bathing
              method to best suit them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BathingCare;
