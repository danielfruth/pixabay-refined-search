import React from 'react';

function Gallery({ images }) {
  if (!images.length) {
    return <h2>No Images Found!</h2>;
  }
  return (
    <div className="Gallery">
      {images.map(image => (
        <div key={image.id} className="picture">
          {console.log(images)}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
