import Puppycarepage from "../HeaderBackground/Puppycarepage";
import { useNavigate } from "react-router-dom";
import "../Caretip/Caretip.css";
const PawCare = () => {
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
              Paws Tips
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
              src="https://www.youtube.com/embed/mAfltwAd4xM?si=Sku8Uk4XU4t0b7U2"
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
                    src="./img/care/Bathing/pawcare2.jpg"
                    alt="Image 1"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img2"
                    src="./img/care/Bathing/bathingcare3.jpg"
                    alt="Image 2"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img3"
                    src="./img/care/Bathing/pawcare1.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="inner-grid-container2">
                <div class="grid-item">
                  <img
                    id="grid-item-img4"
                    src="./img/care/Bathing/grooming-breath3.jpg"
                    alt="Image 4"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img5"
                    src="./img/care/Bathing/earscare-breath1.jpg"
                    alt="Image 5"
                  />
                </div>
                <div class="grid-item">
                  <img
                    id="grid-item-img6"
                    src="./img/care/Bathing/pawcare-breath1.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bathingtip_section_right col-xl-7">
            <h3>Paws Tips</h3>
            <ul>
              <div className="freestylingimg">
                <img
                  src="./img/care/Bathing/pawcare2.jpg"
                  alt=""
                  height="300"
                />
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Regular Inspection:</span> Check your dog's paws
                      regularly for any signs of injury, cuts, cracks, swelling,
                      or foreign objects lodged between the paw pads. Early
                      detection of issues can prevent them from becoming more
                      serious.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Keep Paws Clean:</span> After walks or outdoor
                      activities, gently wipe your dog's paws with a damp cloth
                      to remove dirt, mud, salt, or other debris. Pay special
                      attention to the areas between the toes and pads.
                    </span>
                  </li>
                </div>
              </div>
              <div className="freestylingimg">
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Trimming Nails:</span> Keep your dog's nails trimmed
                      to a safe length to prevent overgrowth, which can cause
                      discomfort and affect your dog's gait. Be cautious not to
                      cut into the quick, the sensitive blood vessel inside the
                      nail.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Moisturize Pads:</span> Regularly apply a pet-safe
                      moisturizing balm or paw wax to your dog's paw pads,
                      especially during dry or cold weather. This helps prevent
                      dryness, cracking, and irritation.
                    </span>
                  </li>
                </div>
                <img
                  src="./img/care/Bathing/pawcare-breath1.jpg"
                  alt=""
                  height="300px"
                />
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Protect from Extreme Temperatures:</span> In hot
                  weather, avoid walking your dog on hot pavement or surfaces
                  that can burn their paw pads. In cold weather, protect your
                  dog's paws from ice, snow, and salt by using booties or
                  applying a protective paw wax.
                </span>
              </li>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Provide Soft Surfaces:</span> Encourage your dog to walk
                  and rest on soft surfaces whenever possible, especially if
                  they have sensitive or injured paw pads. Provide comfortable
                  bedding indoors and consider using rugs or mats on hard
                  floors.
                </span>
              </li>
              <div className="freestylingimg2">
                <img
                  src="./img/care/Bathing/pawcare1.jpg"
                  alt=""
                  height="300"
                />
                <div>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Check for Signs of Allergies:</span> Monitor your
                      dog for signs of allergic reactions, such as excessive
                      licking or chewing of the paws, which can indicate
                      allergies or skin irritation. Consult your veterinarian if
                      you suspect allergies or if your dog shows signs of
                      discomfort.
                    </span>
                  </li>
                  <li>
                    <span class="material-symbols-outlined paw_icon">pets</span>
                    <span>
                      <span>Avoid Chemical Exposure:</span> Keep your dog away
                      from chemicals such as fertilizers, pesticides, and
                      cleaning agents that can irritate or burn their paw pads.
                      When using such products, ensure your dog's paws are
                      protected or clean them thoroughly afterward.
                    </span>
                  </li>
                </div>
              </div>
              <li>
                <span class="material-symbols-outlined paw_icon">pets</span>
                <span>
                  <span>Regular Vet Check-ups:</span> Schedule regular
                  veterinary check-ups for your dog, including examination of
                  the paw pads. Your vet can detect any issues early on and
                  provide appropriate treatment or recommendations for paw care.
                </span>
              </li>
            </ul>
            <p>
              <span>Remember</span> By following these paw care tips and being
              proactive in monitoring your dog's paw health, you can help keep
              their paws comfortable, healthy, and free from injury or
              irritation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PawCare;
