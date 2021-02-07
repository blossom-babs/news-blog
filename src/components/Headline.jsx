import React from "react";
import Card from "./subcomponents/Card";
import Headings from "./subcomponents/Headings";
//
import image from "../assets/undraw_book_reading_kx9s.svg";

const Headline = ({ articles }) => {
  return (
    <div className="headline">
      <div className="card">
        <Headings topic="breaking news" />

        {articles.slice(0, 1).map((item, index) => (
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
      <div className="headline__img">
        <img src={image} alt="headline" />
      </div>
    </div>
  );
};

export default Headline;
