import React from "react";

function Title({ title }) {
  return (
    <div className="Title">
      <div className="title-line"></div>
      <h1 className="title-text">{title}</h1>
      <div className="title-line"></div>
    </div>
  );
}

export default Title;
