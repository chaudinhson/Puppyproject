import "./Section6.css";
import React, { useEffect } from "react";
const Section6 = () => {
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
    <div className="Section6 text-focus-in">
      <img src="./img/section/section1-3-1.jpg" alt="" height="350" />
    </div>
  );
};
export default Section6;
