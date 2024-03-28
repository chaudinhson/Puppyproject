import Breedfilter from "./Breedfilter";
import Searchcomponent from "./Searchcomponent";
import ShowBreedinfo from "./ShowBreedinfo";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Breedsection = () => {
  const navigate = useNavigate();
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchClicked1, setSearchClicked1] = useState(false);
  const [click2, setclick2] = useState(false);
  const [click4, setclick4] = useState(false);
  const click1 = () => {
    setclick4(!click4);
    setclick2(false);
  };
  const click3 = () => {
    setclick2(!click2);
    setclick4(false);
  };
  const handleSearchClick = () => {
    setSearchClicked(true);
  };
  const handleSearchClick1 = () => {
    setSearchClicked1(true);
  };
  return (
    <>
      <div className="breedtitle row">
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.reload();
          }}
          className="col-xl-12"
        >
          ALL DOGS BREEDS
        </h1>

        <p
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          style={{ cursor: "pointer" }}
        >
          PATRONA PUPPY
        </p>
      </div>
      <div className="breedsection  ">
        <Searchcomponent
          handleSearchClick={handleSearchClick}
          click3={click3}
          click4={click4}
        />

        {searchClicked ? null : (
          <div className="filterbox  ">
            <Breedfilter
              handleSearchClick1={handleSearchClick1}
              click1={click1}
              click2={click2}
            />
          </div>
        )}

        {searchClicked || searchClicked1 ? null : <ShowBreedinfo />}
      </div>
    </>
  );
};
export default Breedsection;
