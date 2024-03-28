import "./Section4.css";
import React, { useEffect } from "react";
const Section4 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".text-focus-in");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section4  text-focus-in ">
      <div className="boximg4 ">
        <img src="./img/section/section2-2.jpg" alt="" />
      </div>
      <div className="boxtext4  ">
        <p>
          Our military unit stationed in various locations, spanning from Europe
          to North America and back to Asia, providing numerous opportunities to
          observe and study various types of animals. Among them, dogs captured
          my keen interest.
        </p>
        <p>
          These fascinating creatures inspired me to delve deeper into their
          world, sparking an idea to further explore and share my discoveries
          with friends upon my return home.
        </p>
      </div>
    </div>
  );
};
export default Section4;
