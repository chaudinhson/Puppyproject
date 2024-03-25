import Puppycarepage from "../HeaderBackground/Puppycarepage";
import { useNavigate } from "react-router-dom";
import "../Caretip/Caretip.css";
const EyeCare = () => {
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
              Eyes Tips
            </span>
          </div>
          <hr />
        </div>
        <div className="groomingtip_section  row">
          <div className="bathingtip_section_left col-xl-5 ">
            <h3>Video Tutorial</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GI5x_dZGy1k?si=d1tM4OmHcfFggK13"
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
                    src="./img/care/Bathing/eyecare1.jpg"
                    alt="Image 1"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img2"
                    src="./img/care/Bathing/eyecare-breath1.jpg"
                    alt="Image 2"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img3"
                    src="./img/care/Bathing/eyecare4.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="inner-grid-container2">
                <div class="grid-item">
                  <img
                    id="grid-item-img4"
                    src="./img/care/Bathing/eyecare2.jpg"
                    alt="Image 4"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img5"
                    src="./img/care/Bathing/eyecare3.jpg"
                    alt="Image 5"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img6"
                    src="./img/care/Bathing/eyecare-breath2.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bathingtip_section_right col-xl-7">
            <h3>Eyes Care Tips</h3>
            <ul>
              <div className="freestylingimg">
                <img
                  src="./img/care/Bathing/eyecare1.jpg"
                  alt=""
                  height="300"
                />
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Regular Inspection:</span> Take the time to examine
                      your dog's eyes regularly. Look for any signs of redness,
                      swelling, discharge, cloudiness, or squinting, as these
                      could indicate an underlying eye problem.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Gentle Cleaning:</span> Use a clean, damp cloth to
                      gently wipe away any discharge or debris from around your
                      dog's eyes. Be careful not to touch the eyeball itself. If
                      there's excessive discharge or persistent eye irritation,
                      consult your veterinarian for guidance.
                    </span>
                  </li>
                </div>
              </div>
              <div className="freestylingimg">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Prevent Irritants:</span> Keep your dog's
                      environment clean to minimize exposure to potential eye
                      irritants such as dust, pollen, and chemicals. Avoid using
                      harsh cleaning products near your dog's living areas.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Avoid Trauma:</span> Protect your dog's eyes from
                      potential trauma during playtime or outdoor activities.
                      Avoid throwing objects directly at your dog's face, and be
                      mindful of hazards such as sharp objects or branches.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/eyecare2.jpg"
                  alt=""
                  height="300px"
                />
              </div>
              <div className="freestylingimg">
                <img
                  src="./img/care/Bathing/eyecare3.jpg"
                  alt=""
                  height="300px"
                />
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Proper Grooming:</span> Keep the hair around your
                      dog's eyes trimmed to prevent it from obstructing vision
                      or irritating the eyes. Use blunt-tipped scissors and be
                      careful not to poke or injure the eyes during grooming.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Regular Vet Check-ups:</span> Schedule regular
                      veterinary check-ups for your dog, including thorough eye
                      examinations. Your vet can detect early signs of eye
                      problems and provide appropriate treatment or
                      recommendations for further evaluation if needed.
                    </span>
                  </li>
                </div>
              </div>
              <div className="freestylingimg2">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Monitor Tear Stains:</span> Some dogs are prone to
                      tear stains, which are caused by excessive tear production
                      and can lead to bacterial growth and discoloration of the
                      fur around the eyes. Keep the area around your dog's eyes
                      clean and dry, and consider using specialized tear stain
                      wipes or solutions recommended by your veterinarian.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Address Eye Discomfort:</span> If you notice any
                      changes in your dog's behavior related to eye discomfort,
                      such as excessive rubbing or pawing at the eyes, or if you
                      observe any concerning symptoms, seek prompt veterinary
                      attention. Eye problems can worsen if left untreated, so
                      early intervention is crucial.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/eyecare-breath2.jpg"
                  alt=""
                  height="300px"
                />
              </div>
            </ul>
            <p>
              <span>Remember</span> By incorporating these eye care tips into
              your dog's routine care regimen and staying vigilant for any signs
              of eye problems, you can help maintain your dog's ocular health
              and overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EyeCare;
