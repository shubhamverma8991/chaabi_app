import React from "react";
import "./Sidebar.css";
import { Category, Game, Location, TicketStar } from "../../assets";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="side-top-card">
          <div className="side-top"></div>
        </div>
        <div className="side-menu">
          <ul>
            <li className="mainhead">
              <img className="category" src={Category} alt="category" />
              Dashboard
            </li>
            <li>
              <img className="category" src={Game} alt="category" />
              Trainings
            </li>
            <li>
              <img className="category" src={TicketStar} alt="category" />
              Users
            </li>
            <li>
              <img className="category" src={Location} alt="category" />
              Analytics
            </li>
            <li>
              <img className="category" src={Location} alt="category" />
              My Account
            </li>
            <li>
              <img className="category" src={Location} alt="category" />
              Support
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
