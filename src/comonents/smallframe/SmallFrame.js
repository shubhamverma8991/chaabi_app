import React from "react";
import { Group } from "../../assets";
import "./SmallFrame.css";
export const SmallFrame = () => {
  return (
    <div className="box">
      <div className="main1">
        <div className="heading">
          <p>In training workers</p>
        </div>
        <div className="inside-box">
          <div className="col-l">
            <p>3543</p>
            <div className="flex">
              <div className="per-box">20%</div>
              <div>
                <p className="number">234</p>
              </div>
            </div>
          </div>
          <img src={Group} alt="Group" />
        </div>
      </div>
    </div>
  );
};
