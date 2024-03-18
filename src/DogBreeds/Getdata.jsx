import { useState, useEffect } from "react";

const Getdata = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://65d55bd63f1ab8c63436c752.mockapi.io/DogData"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      // Xử lý lỗi ở đây
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default Getdata;
