import Collapse8 from "./Collapes8";
import Collapse9 from "./Collapes9";
import Collapse10 from "./Collapes10";
import Collapse11 from "./Collapes11";
import "./FAQ2.css";
const FAQ2 = () => {
  return (
    <div className="boxfaq2">
      <div className="innerbox1">
        <h1>CLEANING TIP</h1>
        <Collapse8 />
        <Collapse9 />
        <Collapse10 />
        <Collapse11 />
      </div>
      <div className="innerbox2">
        <img src="./img/faq/clean-ears.jpg" alt="" />
        <img src="./img/faq/clean1.jpg" alt="" />
      </div>
    </div>
  );
};
export default FAQ2;
