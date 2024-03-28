import "./Section3.css";
import React, { useEffect } from "react";
const Section3 = () => {
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
    <div className="section3 container text-focus-in ">
      <div className="boxtext3  ">
        <p>
          I encountered Luna, an incredibly intelligent dog within our corps.
          She is a clever and courageous girl.
        </p>
        <p>
          This bright girl accompanied me on numerous missions, consistently
          coming to my aid. Luna is not just a friend; she has become an
          integral part of my family.
        </p>
        <p>
          Initially, I believed that my connection with Luna was unique, but to
          my surprise, my comrades share similar sentiments with their loyal
          companions. The depth of these connections is truly extraordinary.
        </p>
      </div>
      <div className="boximg3 ">
        <img src="./img/section/section2-1.jpg" alt="" />
      </div>
    </div>
  );
};
export default Section3;
