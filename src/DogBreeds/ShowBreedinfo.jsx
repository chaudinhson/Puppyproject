import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import Getdata from "./Getdata";
import Breedinfo from "./Breedinfo";

const ShowBreedinfo = () => {
  const ITEMS_PER_PAGE = 9; // number of cards per page
  const TOTAL_PAGES = 4; // number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const data = Getdata();
  if (!data) {
    return <div>Loading...</div>; // processing when data is not available
  }
  const totalPages = TOTAL_PAGES;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" paginationbox container">
      <div className="row col-xl-11">
        {currentItems.map((item, index) => (
          <Breedinfo key={index} Pic={item.Pic} Name={item.Name} id={item.id} />
        ))}
      </div>
      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePaginationClick(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default ShowBreedinfo;
