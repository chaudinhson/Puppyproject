import React, { useState } from "react";
import Breedinfo from "./Breedinfo";
import { Pagination } from "react-bootstrap";
const Breedfilter = ({ handleSearchClick1, click1, click2 }) => {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedGeography, setSelectedGeography] = useState("");
  const [FilterResult, setFilterResult] = useState([]);
  const [showfilter, setshowfilter] = useState(false);
  const ITEMS_PER_PAGE = 9; // number of cards per page
  const TOTAL_PAGES = 4; // number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://65d55bd63f1ab8c63436c752.mockapi.io/DogData?Character=${selectedCharacter}&Geography=${selectedGeography}`
      );
      if (!response.ok) {
        throw new Error("Failed to search data");
      }
      const data = await response.json();
      setFilterResult(data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
    handleSearchClick1();
    click1();
    setshowfilter(true);
  };
  if (!FilterResult) {
    return <div>Loading...</div>; // processing when data is not available
  }
  const totalPages = Math.ceil(FilterResult.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = FilterResult.slice(indexOfFirstItem, indexOfLastItem);
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const visiblePageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Hiển thị trang đầu tiên
      i === totalPages || // Hiển thị trang cuối cùng
      (i >= currentPage - 2 && i <= currentPage + 2) // Hiển thị trang gần trang hiện tại
    ) {
      visiblePageNumbers.push(i);
    }
  }
  return (
    <>
      <div className="formbox ">
        <form onSubmit={handleSubmit}>
          <h4>Character</h4>
          <label htmlFor="Hypoallergenic">
            Hypoallergenic
            <input
              type="radio"
              name="Character"
              id="Hypoallergenic"
              value="Hypoallergenic"
              checked={selectedCharacter === "Hypoallergenic"}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Fluffy">
            Fluffy
            <input
              type="radio"
              name="Character"
              id="Fluffy"
              value="Fluffy"
              checked={selectedCharacter === "Fluffy"}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Smartest">
            Smartest
            <input
              type="radio"
              name="Character"
              id="Smartest"
              value="Smartest"
              checked={selectedCharacter === "Smartest"}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="BestGuard">
            Best Guard
            <input
              type="radio"
              name="Character"
              id="BestGuard"
              value="Best Guard"
              checked={selectedCharacter === "Best Guard"}
              onChange={(e) => setSelectedCharacter(e.target.value)}
            />
          </label>
          <br />

          <h4>Geography</h4>
          <label htmlFor="Asia">
            Asia
            <input
              type="radio"
              name="Geography"
              id="Asia"
              value="Asia"
              checked={selectedGeography === "Asia"}
              onChange={(e) => setSelectedGeography(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="America">
            America
            <input
              type="radio"
              name="Geography"
              id="America"
              value="America"
              checked={selectedGeography === "America"}
              onChange={(e) => setSelectedGeography(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Europe">
            Europe
            <input
              type="radio"
              name="Geography"
              id="Europe"
              value="Europe"
              checked={selectedGeography === "Europe"}
              onChange={(e) => setSelectedGeography(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
          <input
            onClick={() => {
              window.location.reload();
            }}
            type="reset"
            value="reset"
          />
        </form>
      </div>
      {/* <div
        className={
          click2
            ? "filterresult container row hidenbox"
            : "filterresult container row"
        }
      > */}
      <div
        className={
          showfilter
            ? click2
              ? "filterresult container row hidenbox"
              : "filterresult container row"
            : "filterresult container row hidenbox"
        }
      >
        <div className="row ">
          {currentItems.map((item, index) => (
            <Breedinfo
              key={index}
              Pic={item.Pic}
              Name={item.Name}
              id={item.id}
            />
          ))}
        </div>
        <Pagination className="pagiitem">
          {visiblePageNumbers.map((pageNumber, index) => (
            <Pagination.Item
              key={index}
              active={pageNumber === currentPage}
              onClick={() => handlePaginationClick(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Breedfilter;
