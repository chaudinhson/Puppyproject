import Contact1 from "./Contact/Contact1";
import Contactpage from "./HeaderBackground/Contactpage";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  return (
    <>
      <Contactpage />
      <div className="Contactbox container">
        <Contact1 />
      </div>
    </>
  );
};
export default Contact;
