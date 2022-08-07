import React from "react";
import "./style.css";

const btn = ({ item, filterItem }) => {
  return (
    <>
      <button className="btn-group__item" onClick={() => filterItem({ item })}>
        {item}
      </button>
    </>
  );
};

export default btn;
