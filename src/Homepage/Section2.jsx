import "./Section2.css";
import React, { useEffect } from "react";

const Section2 = () => {
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
    <div className="section2 container text-focus-in">
      <div className="boximg">
        <img src="./img/section/section1-2.jpg" alt="" />
      </div>
      <div className="boxtext  ">
        <p>
          Hi! <a href="/">I'm Patrona</a>. I have not ever imagined that I can
          see many beautiful creatures in my life.
        </p>
        <p>
          During our years of service in the army, we faced many challenges on
          difficult missions, inclement weather and homesickness.
        </p>
        <p>
          However, Army dog did help us go through this tough day due to their
          friendliness. Gradually, I realized that this creature is very
          beautiful and started to study about them with all of their
          characteristics.
        </p>
      </div>
    </div>
  );
};

export default Section2;
