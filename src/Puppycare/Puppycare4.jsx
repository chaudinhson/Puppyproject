import React, { useEffect } from "react";
import "./Puppycare1.css";
const Puppycare4 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".text-from-bottom5");

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
    <div className="Puppycare1 container text-from-bottom5">
      <div className="Puppycareboxtext">
        <h4>Eyes Care</h4>
        <p>
          Check your puppy’s eyes often – regular cleaning is recommended to
          keep the eye area clean from dust and dirt, especially if you have a
          breed that requires grooming around its face. The hair near their eyes
          can obscure vision and cause dirt to collect and tear ducts to block.
          Signs of an eye problem include eye discharge, redness and squinting
          or holding an eye closed. If you notice any eye changes take your pet
          to the local vet as soon as possible, as eye problems can worsen
          rapidly.
        </p>

        <div>
          <button>Learn More</button>
        </div>
      </div>
      <div className="Puppycareboximg">
        <img className="eye-care" src="./img/care/care4.jpg" alt="" />
      </div>
    </div>
  );
};
export default Puppycare4;
