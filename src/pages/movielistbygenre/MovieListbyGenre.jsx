import React, { useContext, useEffect } from 'react'
import "./movielistbygenre.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { GenreListContext } from '../../context/genrelistContext/GenreListContext';
import { deleteGenreList, getGenreList } from '../../context/genrelistContext/GenreListApiCalls';
export default function MovieListbyGenre() {
 
    const {lists,dispatch}=useContext(GenreListContext)
    useEffect(()=>{
     getGenreList(dispatch);
      
    },[dispatch])
    console.log(lists)

    const handaleDelete=(id)=>{
      deleteGenreList(id,dispatch)
    }


    const columns = [
        { field: "_id", headerName: "ID", width: 210 },
        { field: "title", headerName: "Title", width: 150 },
        { field: "type", headerName: "Type", width: 100 },
        { field: "genre", headerName: "Genre", width: 160 },
    
       
      
        { field: "action", headerName: "Action", width: 120 , renderCell:(params)=>{
            return(
               
                <div className="movieaction">

                     <Link to={"/list/"+params.row._id} state={params.row}>
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
        rows={lists}
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
