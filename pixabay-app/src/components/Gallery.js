import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';

function Gallery({ images }) {
  if (!images.length) {
    return <h2>No Images Found!</h2>;
  }
  return (
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="picture">
          <Link to={'/selected/' + image.id}>
            <img src={image.largeImageURL} alt={image.tags}></img>
          </Link>
        </div>
      ))}
      {console.log(images)}
    </div>
  );
}

export default Gallery;
