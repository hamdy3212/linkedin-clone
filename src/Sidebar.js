import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      
      <div className="sidebar-top">
        <img
          src="https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"
          alt="pic"
        />
        <Avatar className="sidebar-avatar" />
        <h2>Hamdy Youssef</h2>
        <h4>hamdyyousseif32@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar-statNumber">4867</p>
        </div>
        <div className="sidebar-stat">
          <p>Impressions of your post</p>
          <p className="sidebar-statNumber">16346</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p style={{ padding: "10px" }}>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("HTML")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Javascript")}
        {recentItem("Redux")}
      </div>
    </div>
  );
}

export default Sidebar;
