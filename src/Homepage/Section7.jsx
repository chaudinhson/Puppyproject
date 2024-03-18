import "./Section7.css";
import React, { useEffect } from "react";
const Section7 = () => {
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
    <div className="section7 container text-from-bottom7 ">
      <div className="boximg7 ">
        <img src="./img/section/section7.jpg" alt="" />
      </div>
      <div className="boxtext7  ">
        <p>
          If we cant find the answer for your question right here, please feel
          free to send us a question, we will go back to you very soon.
        </p>
        <p>
          We hope you can find valuable information about dog here and please
          share with us more about your story with your friend.
        </p>
      </div>
    </div>
  );
};
export default Section7;
