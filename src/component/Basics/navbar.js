import React from "react";
// import btn from "./button";
// import bt from "./button";
import "./style.css";
const Navbar = ({ filterItem, list }) => {
  return (
    <>
      <navbar className="Navbar">
        <div className="btn-group">
          {list.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
