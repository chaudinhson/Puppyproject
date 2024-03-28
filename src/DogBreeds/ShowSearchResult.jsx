import SearchName from "./SearchName";
import React, { useState } from "react";
import Breedinfo from "./Breedinfo";
// import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowSearchResult = () => {
  const navigate = useNavigate();
  const [searchResult, setsearchResult] = useState([]);
  const handleSearchData = (searchData) => {
    setsearchResult(searchData);
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
      <div>
        <SearchName onSearch={handleSearchData} />
        {searchResult.map((item) => (
          <Breedinfo
            key={item.id}
            id={item.id}
            Pic={item.Pic}
            Name={item.Name}
          />
        ))}
      </div>
    </>
  );
};
export default ShowSearchResult;
