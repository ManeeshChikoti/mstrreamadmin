import React, { useState, useEffect, useMemo } from "react";
import Info from "../../components/informationfeatured/Info";
import Linechart from "../../components/linechart/Linechart";
import "./home.css";
import Smallwidget from "../../components/smallwidget/Smallwidget";
import LargeWidget from "../../components/largewidget/LargeWidget";
import { axiosInstance } from "../../axios";

export default function Home() {

  const [usersData, setUsersData] = useState([]);
  const months =useMemo(()=> [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],[]
  )
  useEffect(()=>{


  const gettingStats = async () => {
    
    // getting data from backend
    try {
      const res = await axiosInstance.get("/users/stats", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
        },
      });
     const sorteddata=res.data.sort((a,b)=>{return a._id-b._id})
      sorteddata.map((item)=> setUsersData(prev=>[...prev,{name:months[item._id-1],TotalUsers:item.total}]))
      
    } catch (error) {
      console.log(error);
    }
  };
  gettingStats()
},[months])

 let data={
    labels:usersData.map((data)=>data.name),
    datasets: [
      {
        label: "Users Gained",
        data: usersData.map((data) => data.TotalUsers),
        backgroundColor: "blue",
        borderColor: "#adb8fb",
      },
    ],
  }
  return (
    <div className="home">
      <Info />
      <Linechart chartdata={data} />
      <div className="Widget">
        <Smallwidget />
        <LargeWidget />
      </div>
    </div>
  );
}
