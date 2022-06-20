import React, { useState } from "react";
import "./userslist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { Userrows } from "../../Data";
import { Link } from "react-router-dom";


export default function Userslist() {
const [data,setData]=useState(Userrows);

const handaleDelete=(id)=>{
    setData(data.filter((item)=>item.id!==id));
}

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 200 , renderCell:(params)=>{
        return(
            <div className="usernameContainer">
                <img className="userImage" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    }},
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    { field: "action", headerName: "Action", width: 120 , renderCell:(params)=>{
        return(
           
            <div className="useraction">
                 <Link to={"/user/"+params.row.id}>
            <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteIcon className="userlistDelete" onClick= {()=>{handaleDelete(params.row.id)}}></DeleteIcon>
            </div>
           
        )
    }},
  ];

  
  return (
    <div className="userslist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
