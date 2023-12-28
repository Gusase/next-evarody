import React from "react";

const EmbedPlayer = ({ id }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbedPlayer;
