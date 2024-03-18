import "./FAQ3.css";
import Collapse12 from "./Collapes12";
import Collapse13 from "./Collapes13";
import Collapse14 from "./Collapes14";
import Collapse15 from "./Collapes15";

const FAQ3 = () => {
  return (
    <div className="boxfaq3">
      <div className="innerbox3">
        <h1>TRAINING TIP</h1>
        <Collapse12 />
        <Collapse13 />
        <Collapse14 />
        <Collapse15 />
      </div>
      <div className="innerbox4">
        <img src="./img/faq/training1.jpg" alt="" />
        <img src="./img/faq/training4.jpg" alt="" />
      </div>
    </div>
  );
};
export default FAQ3;
