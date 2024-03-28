import "./FAQ1.css";
import Collapse1 from "./Collapes1.jsx";
import Collapse2 from "./Collapes2.jsx";
import Collapse3 from "./Collapes3.jsx";
import Collapse4 from "./Collapes4.jsx";
import Collapse5 from "./Collapes5.jsx";
import Collapse6 from "./Collapes6.jsx";
import Collapse7 from "./Collapes7.jsx";
const FAQ1 = () => {
  return (
    <div className="boxfaq1">
      <div className="inner1">
        <h1>VACCINATION SCHEDULE</h1>
        <Collapse1 />
        <Collapse2 />
        <Collapse3 />
        <Collapse4 />
        {/* <Collapse5 /> */}
        <Collapse6 />
        <Collapse7 />
      </div>
      <div className="inner2">
        <img src="./img/faq/vacine-puppy.jpg" alt="" />
        <img src="./img/faq/vacine2.jpg" alt="" />
        <img src="./img/faq/vacine3.jpg" alt="" />
      </div>
    </div>
  );
};
export default FAQ1;
