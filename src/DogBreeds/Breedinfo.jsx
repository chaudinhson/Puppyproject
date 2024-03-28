import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Breedinfo = (props) => {
  const navigate = useNavigate();
  return (
    <Card className="col-xl-4 cardbox">
      <Card.Img
        className="cardimg"
        src={props.Pic}
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/Dogbreeds/${props.id}`);
          window.scrollTo(0, 734);
        }}
      />
      <Card.Body className="cardbodybox">
        <Card.Title
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/Dogbreeds/${props.id}`);
            window.scrollTo(0, 734);
          }}
          className="cardtitle"
        >
          {props.Name}
        </Card.Title>
        <button
          onClick={() => {
            navigate(`/Dogbreeds/${props.id}`);
            window.scrollTo(0, 734);
          }}
        >
          Read More
        </button>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};
export default Breedinfo;
