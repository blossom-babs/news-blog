import React, { useState, useEffect } from "react";
import axios from "axios";
import Headings from "./subcomponents/Headings";
import Card from "./subcomponents/Card";

const MY_KEY = process.env.REACT_APP_API_KEY;

const Health = () => {
  const [ent, setEnt] = useState([]);

  useEffect(() => {
    const newsItems = async () => {
      const response = await axios({
        url: `https://newsapi.org/v2/top-headlines?category=health&apiKey=${MY_KEY}`,
        method: "GET",
      });
      //console.log(response);
      setEnt(response.data.articles);
    };

    newsItems();
  }, []);
  return (
    <div className="card">
      <Headings topic="latest In Health" />
      <div className="ent">
        {ent.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            link={item.url}
            date={item.publishedAt}
            author={item.author}
            source={item.source.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Health;
