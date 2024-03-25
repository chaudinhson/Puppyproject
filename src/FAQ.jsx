import FAQ1 from "./FAQ/FAQ1";
import FAQ2 from "./FAQ/FAQ2";
import FAQ3 from "./FAQ/FAQ3";
import FAQ4 from "./FAQ/FAQ4";
import FAQ5 from "./FAQ/FAQ5";
import FAQpage from "./HeaderBackground/FAQpage";
const FAQ = () => {
  return (
    <div className="FAQbox">
      <FAQpage />
      <div className="faqrandomname">
        <FAQ1 />
        <FAQ2 />
        <FAQ3 />
        <FAQ4 />
        <FAQ5 />
      </div>
    </div>
  );
};
export default FAQ;
