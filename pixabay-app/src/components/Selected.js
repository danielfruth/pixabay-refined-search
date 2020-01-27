import React from 'react';

function Selected(props) {
  const picked = props.images.find(image => image.id === props.match.params.id);
  return <div></div>;
}

export default Selected;
