import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Breedinfo = (props) => {
  const navigate = useNavigate();
  return (
    <Card className="col-xl-4 cardbox">
      <Card.Img className="cardimg" src={props.Pic} />
      <Card.Body className="cardbodybox">
        <Card.Title className="cardtitle">{props.Name}</Card.Title>
        <button
          onClick={() => {
            navigate(`/Dogbreeds/${props.id}`);
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
