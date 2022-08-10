import "./ImageCard.css";
import React from "react";
import Link from "./Link";

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <Link href='/pic' className="item">
      <div className="img container" onClick={handleClick}>
        <img alt={image.alt_description} src={image.urls.regular} />
        <div>
          <p>{image.alt_description}</p>
          <p>
            Picture by: <span>{image.user.username}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
