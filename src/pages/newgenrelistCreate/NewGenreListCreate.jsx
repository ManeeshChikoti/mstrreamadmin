import React, { useContext, useState } from "react";
import "./newgenrelistCreate.css";
import { GenreListContext } from "../../context/genrelistContext/GenreListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useEffect } from "react";
import { getMovies } from "../../context/movieContext/MovieApiCalls";
import { createGenreList } from "../../context/genrelistContext/GenreListApiCalls";
import {useNavigate} from "react-router-dom"
export default function NewGenreListCreate() {
  const [genrelist, setGenreList] = useState({});
  const { dispatch } = useContext(GenreListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const navigate=useNavigate()
  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    setGenreList({ ...genrelist, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setGenreList({ ...genrelist, [e.target.name]: value });
   
  };

  console.log(genrelist);
  const handleCreate = (e) => {
    e.preventDefault();
    createGenreList(genrelist, dispatch);
    navigate("/lists")
  };

  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="enter a list name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="specify a genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option>Type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>contentList</label>
          <select
            className="contentStyle"
            multiple
            name="contentList"
            onChange={handleSelect}
          >
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>

        <button className="addProductButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}
