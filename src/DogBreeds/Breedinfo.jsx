import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Breedinfo = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="col-xl-4">
        <Card.Img src={props.Pic} />
        <Card.Body>
          <Card.Title>{props.Name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <button
            onClick={() => {
              navigate(`/Dogbreeds/${props.id}`);
            }}
          >
            Read More
          </button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Breedinfo;
