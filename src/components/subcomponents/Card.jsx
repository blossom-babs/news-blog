import React from "react";
import { formatDate } from "../../converter";

const Card = ({ title, content, url, date, author, source }) => {
  return (
    <>
      <ul className="card__news">
        <li className="card__news--heading">{title}</li>
        <li className="card__news--content">{content}</li>
        <li className="card__news--link">
          <a href={`${url}`}>Read More</a>
        </li>
        <li className="card__news--date">{formatDate(date)}</li>
        <div className="flex card__flex">
          <li style={{ fontsize: "italic" }}>Author:{author}</li>
          <li style={{ fontsize: "italic" }}>source:{source}</li>
        </div>
      </ul>
    </>
  );
};

export default Card;
