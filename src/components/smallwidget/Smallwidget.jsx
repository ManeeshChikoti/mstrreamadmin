import React, { useEffect, useState } from "react";
import "./smallwidget.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { axiosInstance } from "../../axios";


export default function Smallwidget() {

  const [newusers,setnewUsers]=useState([])
  // getting few users from backend
  useEffect(()=>{
    const getnewusers=async ()=>{
      try{
        const res=await axiosInstance.get("/users?new=true",{
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        })
        setnewUsers(res.data)

      }catch(error){
        console.log(error)

      }
    }
    getnewusers()

  },[])
  return (
    <div className="smallwidget">
      <h3 className="smallwidgetTitle">New Members</h3>
      <ul className="smallwidgetList">
{/* mapping through the newusers to get  some info */}
        {newusers.map(user=>(
        <li key={user._id} className="smallwidgetItems">
          <img
            src={user.profiePic||"https://cdn2.iconfinder.com/data/icons/solid-glyphs-volume-2/256/user-unisex-512.png"}
            className="smallwidgetImage"
            alt=""
          />
          <div className="smallwidgetUser">
            <span className="smallwidgetUsername">{user.username}</span>
          </div>
          {/* havent added any functionality to the button for now */}
          <button className="smallwidgetButton">
            <VisibilityIcon className="smallwidgetIcon"></VisibilityIcon>
            Display
          </button>
        </li>
       ))}
      </ul>
    </div>
  );
}
