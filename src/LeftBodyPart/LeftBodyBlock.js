import React from "react";
import image from "../images/image1.jpg";

const LeftBodyBlock = (props) => {
  return (
    <div className="LeftBlockInfo" id={props.changeColor}>
      <div id="image_div">
        <img className="LeftImage" src={image} alt="PersonLeft"></img>
      </div>

      <div className="block_name">
        <div>
          <h5 id="block_name_heading">{props.name}</h5>
        </div>
        <div id="date">
          <small>{props.date}</small>
        </div>
      </div>
      <div id={props.dotcolor}></div>
    </div>
  );
};

export default LeftBodyBlock;