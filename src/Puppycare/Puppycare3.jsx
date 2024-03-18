import React, { useEffect } from "react";
import "./Puppycare1.css";
const Puppycare3 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".text-from-bottom4");

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
    <div className="Puppycare1 container text-from-bottom4">
      <div className="Puppycareboximg">
        <img className="clean-ears" src="./img/care/care3.jpg" alt="" />
      </div>
      <div className="Puppycareboxtext">
        <h4>How important of cleaning puppy's ears</h4>
        <p>
          You may have thought that it’s not all that important to keep a dog’s
          ears clean. In fact, many dogs will go their whole lives without
          getting their ears cleaned. It’s not because they don’t need a good
          cleaning every now and then, but because we generally just assume that
          dogs are animals and animals simply look after themselves.
        </p>
        <p>
          The truth of the matter is that, like humans, dogs can easily get
          substantial build-ups of ear wax and other dirt in their ears.
          Sometimes, if left untreated, the dirt becomes too much of an
          irritation and allergies may flair up, resulting in serious infection.
        </p>
        <div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Puppycare3;
