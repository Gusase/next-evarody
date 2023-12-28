import React from "react";

const Card = ({ children }) => {
  return (
    <div className="rounded-sm bg-gray-900/80 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
      {children}
    </div>
  );
};

export default Card;
