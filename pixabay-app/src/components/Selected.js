import React from 'react';

function Selected(props) {
  const picked = props.images.find(
    image => image.id.toString() === props.match.params.id
  );
  console.log(props);
  if (picked) {
    return (
      <div>
        <img src={picked.largeImageURL} alt={picked.tags} />
      </div>
    );
  } else {
    return null;
  }
}

export default Selected;
