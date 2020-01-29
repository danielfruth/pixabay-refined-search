import React from 'react';
import './Selected.css';

function Selected(props) {
  const picked = props.images.find(
    image => image.id.toString() === props.match.params.id
  );
  console.log(props);
  if (picked) {
    return (
      <div className="selected">
        <img
          className="picked-image"
          src={picked.largeImageURL}
          alt={picked.tags}
        />
        <h1>Made or taken by: {picked.user}</h1>
        <a href={picked.pageURL}>
          Link to user's image to download from Pixabay
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export default Selected;
