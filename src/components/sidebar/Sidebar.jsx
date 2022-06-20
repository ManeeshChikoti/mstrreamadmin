import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupIcon from '@mui/icons-material/Group';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ViewListIcon from '@mui/icons-material/ViewList';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChatIcon from '@mui/icons-material/Chat';
import ReportIcon from '@mui/icons-material/Report';
import WorkIcon from '@mui/icons-material/Work';
import UploadIcon from '@mui/icons-material/Upload';
import { Link } from "react-router-dom";
//imported icons from material ui 
//addded links to listitems to move to the specified link
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="menu">
          <h3 className="title">Dashboard</h3>
          <ul className="menulist">
            <Link to="/" className="link">
            <li className="items  ">
              <HomeIcon></HomeIcon>
              Home
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Quick Start</h3>
          <ul className="menulist">
            <Link to="/users" className="link">
            <li className="items">
              <GroupIcon></GroupIcon>
              Users
            </li>
            </Link>
            <Link to="/movies" className="link">
            <li className="items">
             <PlayCircleIcon></PlayCircleIcon>
            Movies
            </li>
            </Link>
            <Link to="/lists" className="link">
            <li className="items">
              <ViewListIcon></ViewListIcon>
              Movies List
            </li>
            </Link>
            <Link to="/movieupload" className="link">
            <li className="items">
              <UploadIcon></UploadIcon>
              Movie upload
            </li>
            </Link>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Notifications</h3>
          <ul className="menulist">
            <li className="items">
              <EmailIcon></EmailIcon>
              Mail
            </li>
            <li className="items">
             <FacebookIcon></FacebookIcon>
              Facebook
            </li>
            <li className="items">
             <ChatIcon></ChatIcon>
              Messages
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Staff</h3>
          <ul className="menulist">
            <li className="items">
             <WorkIcon></WorkIcon>
              Manage
            </li>
            <li className="items">
             <TimelineIcon></TimelineIcon>
              Analytics
            </li>
            <li className="items">
            <ReportIcon></ReportIcon>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
