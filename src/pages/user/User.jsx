import React from "react";
import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="usertopContainer">
        <h3 className="userTitle">Edit User</h3>
        <Link to="/newuser">
          <button className="userAdd">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              className="imageofuser"
              src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
              alt=""
            />
            <div className="userdisplyinfo">
              <span className="userdisplayname">Maneesh Chikoti</span>
              <span className="userdisplayRole">Full Stack Developer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplaydetails">Account Details</span>
            <div className="userinfo">
              <PermIdentityIcon className="usericon"></PermIdentityIcon>
              <span className="userinfoTitle">Maneesh Chikoti</span>
            </div>
            <div className="userinfo">
              <CalendarTodayIcon className="usericon"></CalendarTodayIcon>
              <span className="userinfoTitle">10/5/1998</span>
            </div>
            <span className="userDisplaydetails">Contact Details</span>
            <div className="userinfo">
              <PhoneAndroidIcon className="usericon"></PhoneAndroidIcon>
              <span className="userinfoTitle">9876543210</span>
            </div>
            <div className="userinfo">
              <MailIcon className="usericon"></MailIcon>
              <span className="userinfoTitle">Maneeshchikoti@gmail.com</span>
            </div>
            <div className="userinfo">
              <HomeIcon className="usericon"></HomeIcon>
              <span className="userinfoTitle">Hyderabad</span>
            </div>
          </div>
        </div>
        <div className="userUpdateinfo">
          <span className="userupdateTitle">Edit</span>
          <form className="userupdateform">
            <div className="userupdateleft">
              <div className="userupdateiteminfo">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="userinputupadte"
                />
              </div>
              <div className="userupdateiteminfo">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Fullname"
                  className="userinputupadte"
                />
              </div>
              <div className="userupdateiteminfo">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  className="userinputupadte"
                />
              </div>
              <div className="userupdateiteminfo">
                <label>Number</label>
                <input
                  type="text"
                  placeholder="9876543210"
                  className="userinputupadte"
                />
              </div>
              <div className="userupdateiteminfo">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Hyderabad"
                  className="userinputupadte"
                />
              </div>
            </div>
            <div className="userupdateright">
              <div className="userimageupload">
                <img
                  className="updateimage"
                  src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
                  alt=""
                />
                <input type="file" />
              </div>
              <button className="userbuttonupdate">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
