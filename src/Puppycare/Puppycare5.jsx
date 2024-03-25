import React, { useEffect } from "react";
import "./Puppycare1.css";
import { useNavigate } from "react-router-dom";
const Puppycare5 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".text-from-bottom7");

      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight) {
          element.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="Puppycare1 care5 container text-from-bottom7">
      <div className="Puppycareboximg">
        <img
          className="clean-ears"
          src="./img/care/care5.jpg"
          alt=""
          height="90%"
        />
      </div>
      <div className="Puppycareboxtext">
        <h4>Puppy's Paws</h4>
        <p>
          Once your puppy starts walking on pavements, his nails will be trimmed
          naturally by walking on the hard surface. Regularly check the
          condition and length of his nails, including any ‘thumb’ nails, also
          known as ‘Dew claws’, higher up on the front and back feet. If they
          need further trimming, we suggest you take your puppy to your vet or
          groomer, who can do the job for you or show you how to do it safely...
        </p>

        <div>
          <button
            onClick={() => {
              navigate("/PawCare");
              window.scrollTo(0, 0);
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Puppycare5;
