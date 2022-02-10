import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";

const Detail = () => {
  const API_KEY = "dff14555";
  let { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://www.omdbapi.com/?i=${id}&&apikey=${API_KEY}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div className="movie-detail">
      <Content movieData={item} />
    </div>
  );
};

export default Detail;
