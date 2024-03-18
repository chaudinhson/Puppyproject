import { Table, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dogbreedspage from "../HeaderBackground/Dogbreedspage";
const BreedsDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); //get the id from the URL
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://65d55bd63f1ab8c63436c752.mockapi.io/DogData/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(true);
    } catch (error) {
      // Xử lý lỗi ở đây

      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) {
    return <Spinner animation="border" role="status" />;
  }
  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <>
      <Dogbreedspage />
      <Table>
        <thead>
          <tr>
            <Col colSpan="2">{data.Name}</Col>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Origin</td>
            <td>{data.Origin}</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>{data.Size}</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>{data.Color}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{data.Type}</td>
          </tr>
          <tr>
            <td>Breed Group</td>
            <td>{data.Breed_Group}</td>
          </tr>
          <tr>
            <td>Character</td>
            <td>{data.Character}</td>
          </tr>
          <tr>
            <td>Temperament</td>
            <td>{data.Temperament}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{data.Height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{data.Weight}</td>
          </tr>
          <tr>
            <td>Geography</td>
            <td>{data.Geography}</td>
          </tr>
          <tr>
            <td>Overview</td>
            <td>{data.Overview}</td>
          </tr>
          <tr>
            <td>History</td>
            <td>{data.History}</td>
          </tr>
          <tr>
            <td>Gallery</td>
            <td>
              <img src={data.Gallery} alt="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default BreedsDetails;
