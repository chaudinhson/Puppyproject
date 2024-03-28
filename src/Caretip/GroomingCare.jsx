import Puppycarepage from "../HeaderBackground/Puppycarepage";
import { useNavigate } from "react-router-dom";
import "../Caretip/Caretip.css";
const GroomingCare = () => {
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
              Grooming Tips
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
              src="https://www.youtube.com/embed/YpzjiS5M8V0?si=t4v_18S_ICqL0sgQ"
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
                    src="./img/care/Bathing/grooming1.jpg"
                    alt="Image 1"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img2"
                    src="./img/care/Bathing/grooming-breath1-1.jpg"
                    alt="Image 2"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img3"
                    src="./img/care/Bathing/grooming-breath3.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="inner-grid-container2">
                <div class="grid-item">
                  <img
                    id="grid-item-img4"
                    src="./img/care/Bathing/grooming2.jpg"
                    alt="Image 4"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img5"
                    src="./img/care/Bathing/grooming3.jpg"
                    alt="Image 5"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img6"
                    src="./img/care/Bathing/grooming-breath2.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bathingtip_section_right col-xl-7">
            <h3>Grooming Tips</h3>
            <ul>
              <div className="freestylingimg">
                <img
                  src="./img/care/Bathing/grooming1.jpg"
                  alt=""
                  height="300"
                />
                <div style={{ marginLeft: "10px" }}>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Regular Brushing:</span> Brush your dog's coat
                      regularly to remove loose hair, prevent matting, and
                      distribute natural oils for a healthy coat. The frequency
                      of brushing depends on your dog's breed and coat type.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Trimming Nails:</span> Keep your dog's nails trimmed
                      to a safe length. Long nails can cause discomfort and
                      affect your dog's gait. Be cautious not to cut the quick,
                      which is a sensitive blood vessel inside the nail.
                    </span>
                  </li>
                </div>
              </div>
              <div className="freestylingimg">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Ear Cleaning:</span> Clean your dog's ears regularly
                      to prevent wax buildup and infections. Use a vet-approved
                      ear cleaning solution and gently wipe the outer ear with a
                      cotton ball or pad.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Dental Care:</span> Maintain your dog's dental
                      hygiene by brushing its teeth regularly with a
                      dog-specific toothbrush and toothpaste. Dental chews and
                      toys can also help reduce tartar buildup and freshen
                      breath.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/grooming2.jpg"
                  alt=""
                  height="300px"
                />
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Bathing:</span> Bathe your dog as needed using a dog
                  shampoo that suits its skin and coat type. Over-bathing can
                  strip natural oils from the skin, so follow a bathing schedule
                  appropriate for your dog's needs.
                </span>
              </li>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Eye Care:</span> Keep your dog's eyes clean by gently
                  wiping them with a damp cloth. Check for signs of irritation,
                  discharge, or redness, which may indicate an eye infection or
                  other issues.
                </span>
              </li>
              <div className="freestylingimg2">
                <img
                  src="./img/care/Bathing/grooming3.jpg"
                  alt=""
                  height="200"
                />
                <div style={{ marginLeft: "10px" }}>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Trimming Hair:</span> Trim excess hair around your
                      dog's eyes, ears, and paw pads to prevent irritation and
                      matting. Use blunt-tipped scissors and be careful not to
                      cut too close to the skin.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Check for Parasites:</span> Regularly inspect your
                      dog's skin and coat for fleas, ticks, and other parasites.
                      Use preventive treatments recommended by your veterinarian
                      to protect your dog against infestations.
                    </span>
                  </li>
                </div>
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Monitor Overall Health:</span> Grooming sessions provide
                  an opportunity to check for any lumps, bumps, or unusual
                  changes in your dog's skin or coat. If you notice anything
                  concerning, consult your veterinarian for further evaluation.
                </span>
              </li>
            </ul>
            <p>
              <span>Remember</span> By following these grooming tips, you can
              help keep your dog looking and feeling its best while promoting
              its overall health and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroomingCare;
