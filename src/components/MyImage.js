import React, { useState } from "react";
import "./Myimage.css";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="all-spimages">
      <div className="sp-image">
        {imgs.map((curElm, index) => {
          return (
            <div className="f-images">
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </div>
          );
        })}
      </div>

      <div className="main-image">
        <img
          className="big-image"
          src={mainImage.url}
          alt={mainImage.filename}
        />
      </div>
    </div>
  );
};

export default MyImage;
