import React from "react";
import "./Header.css";
import { SmallFrame } from "../smallframe/SmallFrame";

export const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="top-name">
          <p id="main">Hello, Puneet Dhiman</p>
          <p id="second">
            following is your organization's performance summary
          </p>
        </div>
      </div>
      <div className="body">
        <SmallFrame />
        <SmallFrame/>
        <SmallFrame/>
        <SmallFrame/>
      </div>
    </div>
  );
};
