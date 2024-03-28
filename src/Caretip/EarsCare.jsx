import Puppycarepage from "../HeaderBackground/Puppycarepage";
import { useNavigate } from "react-router-dom";
import "../Caretip/Caretip.css";
const EarsCare = () => {
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
              Ears Tips
            </span>
          </div>
          <hr />
        </div>
        <div className="bathingtip_section  row">
          <div className="bathingtip_section_left col-xl-5">
            <h3>Video Tutorial</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5C39A9UU720?si=39K76PR6VV5pQRpU"
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
                    src="./img/care/Bathing/earscare1.jpg"
                    alt="Image 1"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img2"
                    src="./img/care/Bathing/earscare-breath2.jpg"
                    alt="Image 2"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img3"
                    src="./img/care/Bathing/earscare-breath3.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="inner-grid-container2">
                <div class="grid-item">
                  <img
                    id="grid-item-img4"
                    src="./img/care/Bathing/earscare2.jpg"
                    alt="Image 4"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img5"
                    src="./img/care/Bathing/earscare3.jpg"
                    alt="Image 5"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img6"
                    src="./img/care/Bathing/earscare-breath1.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bathingtip_section_right col-xl-7">
            <h3>Ears Tips</h3>
            <ul>
              <div className="freestylingimg">
                <img
                  src="./img/care/Bathing/earscare1.jpg"
                  alt=""
                  height="300px"
                />
                <div style={{ marginLeft: "10px" }}>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Regular Inspection:</span> Check your dog's ears
                      regularly for signs of dirt, wax buildup, redness,
                      swelling, or odor. Early detection of any issues can help
                      prevent them from developing into more serious problems.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Gentle Cleaning:</span> Use a veterinarian-approved
                      ear cleaning solution specifically designed for dogs.
                      Avoid using cotton swabs, as they can push debris further
                      into the ear canal and potentially damage the eardrum.
                      Instead, soak a cotton ball or pad with the cleaning
                      solution and gently wipe the outer ear and visible parts
                      of the ear canal.
                    </span>
                  </li>
                </div>
              </div>
              <div className="freestylingimg">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Proper Technique:</span> When cleaning your dog's
                      ears, hold the ear flap (pinna) gently and lift it upward
                      to straighten the ear canal. This helps facilitate the
                      cleaning process and prevents accidental injury. Never
                      insert anything deep into the ear canal.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Avoid OverCleaning:</span> Cleaning your dog's ears
                      too frequently can disrupt the natural balance of ear wax
                      and beneficial microorganisms, potentially leading to
                      irritation or infection. Follow your veterinarian's
                      recommendations for how often to clean your dog's ears
                      based on its individual needs.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/earscare2.jpg"
                  alt=""
                  height="300px"
                />
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Addressing Excessive Wax or Discharge:</span> If you
                  notice an excessive amount of wax or discharge in your dog's
                  ears, or if your dog shows signs of discomfort such as
                  scratching or shaking its head, consult your veterinarian.
                  These could be signs of an underlying ear infection or other
                  health issue that requires treatment.
                </span>
              </li>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Drying Ears After Bathing:</span> After bathing your dog
                  or if its ears get wet during swimming or outdoor activities,
                  gently dry the ears with a clean, dry cloth or cotton ball.
                  Moisture in the ears can create a favorable environment for
                  bacterial or yeast growth, increasing the risk of infections.
                </span>
              </li>
              <div className="freestylingimg2">
                <img
                  src="./img/care/Bathing/earscare3.jpg"
                  alt=""
                  height="200"
                />
                <div style={{ marginLeft: "10px" }}>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Professional Examination:</span> Schedule regular
                      check-ups with your veterinarian, who can perform thorough
                      ear examinations and provide guidance on ear care tailored
                      to your dog's specific needs. Your vet can also
                      demonstrate proper ear cleaning techniques if you're
                      unsure how to do it correctly.
                    </span>
                  </li>
                </div>
              </div>
            </ul>
            <p>
              <span>Remember</span> By incorporating these ear cleaning tips
              into your dog's grooming routine and seeking prompt veterinary
              attention for any concerns, you can help maintain your dog's ear
              health and prevent potential ear problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EarsCare;
