import { Table, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dogbreedspage from "../HeaderBackground/Dogbreedspage";
import { useNavigate } from "react-router-dom";
const BreedsDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showOverview, setShowOverview] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const { id } = useParams(); //get the id from the URL
  const navigate = useNavigate();
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
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="breed-detail-box">
      <Dogbreedspage />{" "}
      <div className="d-flex breed-detail-span">
        <span
          onClick={() => {
            navigate("/Dogbreeds");
          }}
          style={{ cursor: "pointer" }}
        >
          Dog Breeds /
        </span>

        <span
          onClick={() => {
            navigate(`/Dogbreeds/${id}`);
            window.scrollTo(0, 734);
          }}
          style={{ cursor: "pointer" }}
        >
          {data.Name}
        </span>
      </div>
      <div className="breed-detail-title">
        <h1>{data.Name}</h1>
      </div>
      <div className="dogdetails d-flex  container">
        <div className="doggallery d-flex flex-column col-4">
          <img src={data.Gallery} alt="" height="300" />
        </div>
        <div className="d-flex flex-column col-8">
          <div className="dog-info d-flex flex-column ">
            <div className="d-flex">
              <table>
                <tr>
                  <td>Dog's Name </td>
                  <td>{data.Name}</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>{data.Origin}</td>
                </tr>
                <tr>
                  <td>Breed Group</td>
                  <td>{data.Breed_Group}</td>
                </tr>
              </table>{" "}
              <img src={data.Pic} alt="" height="200" />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo"
              data-bs-placement="right"
            >
              More Details
            </button>
            <div className="d-flex">
              <div id="demo" class="collapse">
                <table>
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
                </table>
              </div>
            </div>
            <hr />
          </div>
          <div className="d-flex flex-column">
            <div className="overview">
              <span>Overview</span>
              <p className="text-left">
                {showOverview
                  ? data.Overview
                  : truncateText(data.Overview, 100)}
                <button
                  onClick={() => {
                    setShowOverview(!showOverview);
                  }}
                >
                  {showOverview ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
            <div className="history">
              <span>History</span>
              <p className="text-left">
                {showHistory ? data.History : truncateText(data.History, 100)}
                <button onClick={() => setShowHistory(!showHistory)}>
                  {showHistory ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreedsDetails;
