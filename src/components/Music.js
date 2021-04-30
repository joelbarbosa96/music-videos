import React from "react";

const Music = ({ image_url, artist, title }) => {
  return (
    <article className="card">
      <img src={image_url} alt={title} />
      <div className="card__info">
        <h3>{artist}</h3>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default Music;
