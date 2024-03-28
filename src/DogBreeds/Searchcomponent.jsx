// import React, { useState } from "react";
// import Breedinfo from "./Breedinfo";
// import { useNavigate } from "react-router-dom";
// const Searchcomponent = ({ handleSearchClick, click3, click4 }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const navigate = useNavigate();
//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://65d55bd63f1ab8c63436c752.mockapi.io/DogData?Name=${searchTerm}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to search data");
//       }
//       const searchData = await response.json();
//       setSearchResult(searchData);
//       console.log("Search data:", searchData);
//     } catch (error) {
//       console.error("Error searching data:", error);
//     }
//     setSearchTerm("");
//     handleSearchClick();
//     click3();
//     // navigate("/SearchResult");
//   };
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSearch();
//     }
//   };
//   return (
//     <div className="searchboxcompponent">
//       <div className="searchinput">
//         <input
//           placeholder="Breed Name"
//           onKeyDown={handleKeyDown}
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <span onClick={handleSearch} class="material-symbols-outlined">
//           search
//         </span>
//       </div>
//       <div
//         className={
//           click4
//             ? "searchresultbox container row hidenbox"
//             : "searchresultbox container row"
//         }
//       >
//         {searchResult.map((item) => (
//           <Breedinfo
//             key={item.id}
//             id={item.id}
//             Pic={item.Pic}
//             Name={item.Name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Searchcomponent;
import React, { useState } from "react";
import Breedinfo from "./Breedinfo";
import { useNavigate } from "react-router-dom";
const Searchcomponent = ({ handleSearchClick, click3, click4 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://65d55bd63f1ab8c63436c752.mockapi.io/DogData?Name=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to search data");
      }
      const searchData = await response.json();
      setSearchResult(searchData);
      console.log("Search data:", searchData);
    } catch (error) {
      console.error("Error searching data:", error);
    }
    setSearchTerm("");
    handleSearchClick();
    click3();
    // navigate("/SearchResult");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <div className="searchboxcompponent">
      <div className="search-container">
        <input
          placeholder="Breed Name"
          onKeyDown={handleKeyDown}
          type="text"
          value={searchTerm}
          className="inputsearch border-0 search-btn"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <span onClick={handleSearch} class="material-symbols-outlined">
          search
        </span>
      </div>
      <div
        className={
          click4
            ? "searchresultbox container row hidenbox"
            : "searchresultbox container row"
        }
      >
        {searchResult.map((item) => (
          <Breedinfo
            key={item.id}
            id={item.id}
            Pic={item.Pic}
            Name={item.Name}
          />
        ))}
      </div>
    </div>
  );
};
export default Searchcomponent;
