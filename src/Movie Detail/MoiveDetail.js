import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
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
    console.log(item);
  };

  return (
    <div>
      <h1>Information about the movie</h1>
    </div>
  );
}

export default Detail;
