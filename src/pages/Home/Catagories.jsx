import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "./Home/NewsCart";

const Catagories = () => {
  const { id } = useParams();
  const catagoriesNews = useLoaderData();

  return (
    <div>
      <h1>This is a catagories: {catagoriesNews?.length}</h1>
      {catagoriesNews.map((news) => (
        <NewsCart key={news._id} news={news}></NewsCart>
      ))}
    </div>
  );
};

export default Catagories;
