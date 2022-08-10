import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import SelectedPic from "./SelectedPic";
import Route from "./Route";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);


  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 0oXlTxMsdJy1xbNFA9Aya4xCIZjU0JNJJGEoho1r9y0"
      }
    });

    setImages(response.data.results);
  };


  return (
    <div>
      <Route path="/pic">
        <SelectedPic selectedImage={selectedImage} />
      </Route>
      <Route path="/">
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList images={images} onClick={setSelectedImage} />
      </Route>
    </div>
  );
};

export default App;
