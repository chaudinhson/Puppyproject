import "./Section5.css";
import React, { useEffect } from "react";
const Section5 = () => {
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
    <div className="section5 container text-focus-in ">
      <div className="boximg5 ">
        <img src="./img/section/section3-1.jpg" alt="" />
      </div>
      <div className="boxtext5  ">
        <p>
          Upon completing my military service, I returned home and delved deeper
          into the study of the dogs I had encountered, exploring new breeds
          along the way.
        </p>
        <p>
          Excited about my findings, I shared my newfound passion with my
          friend, Chad, who happens to be a veterinarian. He expressed immense
          joy and wholeheartedly supported my endeavor.
        </p>
        <p>
          Motivated by this encouragement, I decided to create a website to
          share not only my experiences but also valuable puppy care tips. With
          Chad's expert consultation, I aim to provide helpful insights for
          everyone interested in canine companionship.
        </p>
      </div>
    </div>
  );
};
export default Section5;
