import React, { useState } from "react";

const SearchName = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://65d55bd63f1ab8c63436c752.mockapi.io/DogData?Name=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to search data");
      }
      const searchData = await response.json();
      onSearch(searchData);
      console.log("Search data:", searchData);
    } catch (error) {
      console.error("Error searching data:", error);
    }
    setSearchTerm("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <div>
      <input
        placeholder="Breed Name"
        onKeyDown={handleKeyDown}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchName;
