import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images, onClick }) => {
  const imagesList = images.map((image) => {
    return <ImageCard key={image.id} image={image} onClick={onClick} />;
  });
  return (
    <div className="container">
      <div className="image list">{imagesList}</div>
    </div>
  );
};
export default ImageList;
