import React from "react";
import "./style.css";
const menuCard = ({ data }) => {
  return (
    <>
      <section className="main-card--container">
        {data.map((currElem) => {
          const { id, name, category, image, description } = currElem;
          // console.log(currElem);
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-decription subtle">
                      {description}
                    </span>
                    <div className="card-read">Read </div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">ORDER NOW</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default menuCard;
