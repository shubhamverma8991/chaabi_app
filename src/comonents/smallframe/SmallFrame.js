import React from "react";
import { Group } from "../../assets";
import './SmallFrame.css'
export const SmallFrame = () => {
  return (
    <div className="box">
      <div className="main1">
        <div className="heading">
          <p>In training workers</p>
        </div>
        <div className="inside-box">
            <p>3543</p>
            <img src={Group} alt="Group"/>
        </div>
      </div>
    </div>
  );
};
