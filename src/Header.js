import React from "react";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <div className="header">
      {/* left  */}
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="logo"
        />
        <div className="header-search">
            <SearchIcon/>
            <input type="text"/>
        </div>
      </div>
      <div className="header-right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messages" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption title="Me" avatar="https://i.ibb.co/FbDqyh1/Whats-App-Image-2022-03-14-at-1-58-44-PM.jpg"/>


      </div>
    </div>
  );
};

export default Header;
