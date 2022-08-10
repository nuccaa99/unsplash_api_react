import React from "react";
import "./SelectedPic.css";
import "./ImageCard";

const SelectedPic = ({ selectedImage }) => {
  return (
    <div className="wrapper">
      <div className="selected image">
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
        <div className="image info">
          <h3>{selectedImage.alt_description}</h3>
          <h4>Picture By: {selectedImage.user.username}</h4>
          <p>"{selectedImage.user.bio}"</p>
          <p>-{selectedImage.user.name}</p>
          <p>{selectedImage.user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedPic;
