import React, { useContext, useState } from "react";
import "./newmovie.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/MovieApiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext"
import {useNavigate} from "react-router-dom"
export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [titleimg, setTitleImg] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const [uploaded, setUploaded] = useState(0);
 const {dispatch} =useContext(MovieContext)
const navigate=useNavigate()
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const upload = (allItems) => {
    allItems.forEach((item) => {
      const storageRef = ref(storage, `/items/${item.file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: image, label: "img" },
      { file: titleimg, label: "imgTitle" },
      { file: trailer, label: "trailer" },
    ]);
  };
  const handleCreate=(e)=>{
    e.preventDefault();
    createMovie(movie,dispatch)
    navigate("/movies")

  }
  console.log(uploaded);
  console.log(movie);
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="addProductItem">
          <label> Title Image</label>
          <input
            type="file"
            id="titleimage"
            name="titleimage"
            onChange={(e) => {
              setTitleImg(e.target.files[0]);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="enter a movie name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="info about movie"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="release year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder=" movie genre type"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>limit</label>
          <input
            type="text"
            placeholder="age limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
          <option value="false">No</option>
            <option value="true">Yes</option>
           
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => {
              setTrailer(e.target.files[0]);
            }}
          />
        </div>
        {uploaded === 3 ? (
          <button className="addProductButton" onClick={handleCreate}>Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
