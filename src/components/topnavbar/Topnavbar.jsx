import React from "react";
import "./topnavbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { logout } from "../../context/authContext/AuthActions";
import {AuthContext} from "../../context/authContext/AuthContext"
import { useContext } from "react";
export default function Topnavbar() {

  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topnavbar">
      <div className="topnavwrapper">
        <div className="navleft">
          <span className="logo">MStream</span>
        </div>
        <div className="navright">
          <div className="icons">
            <NotificationsIcon></NotificationsIcon>
            <span className="iconBadge">5</span>
          </div>
          <div className="icons">
            <LanguageIcon></LanguageIcon>
            <span className="iconBadge">5</span>
          </div>
          <div className="icons">
            <SettingsIcon></SettingsIcon>
          </div>
          {/* <img className='profilepic' src='https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg' alt="profilepic"/> */}
          {/* on clicking the button it dispatches logout call which will clear the user info from local storage  */}
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
