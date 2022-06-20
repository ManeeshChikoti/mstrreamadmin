import React, { useContext, useEffect} from 'react'
import "./movies.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
// import { Productrows } from "../../Data";
import { Link } from "react-router-dom";
import {MovieContext} from "../../context/movieContext/MovieContext"
import {deleteMovie, getMovies} from "../../context/movieContext/MovieApiCalls"
export default function Movies() {
    // const [data,setData]=useState(Productrows);
    const {movies,dispatch}=useContext(MovieContext)
    useEffect(()=>{
      getMovies(dispatch);
      
    },[dispatch])
    console.log(movies)

    const handaleDelete=(id)=>{
       deleteMovie(id,dispatch)
    }


    const columns = [
        { field: "_id", headerName: "ID", width: 210 },
        { field: "movie", headerName: "movie", width: 220 , renderCell:(params)=>{
            return(
                <div className="movienameContainer">
                    <img className="movieImage" src={params.row.imgTitle} alt=""/>
                    {params.row.title}
                </div>
            )
        }},
        { field: "genre", headerName: "Genre", width: 160 },
        { field: "limit", headerName: "Limit", width: 100 },
        { field: "year", headerName: "Year", width: 100 },
        { field: "isSeries", headerName: "isSeries", width: 100 },
     
      
        { field: "action", headerName: "Action", width: 120 , renderCell:(params)=>{
            return(
               
                <div className="movieaction">

                     <Link to={"/movie/"+params.row._id} state={params.row}>
                <button className="movielistEdit">Edit</button>
                </Link>
                <DeleteIcon className="movielistDelete" onClick= {()=>{handaleDelete(params.row._id)}}></DeleteIcon>
                </div>
               
            )
        }},
      ];
    
  return (
    <div className='movielist'>
         <DataGrid
        rows={movies}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  )
}
