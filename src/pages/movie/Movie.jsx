import React from "react";          
import { Link, useLocation } from "react-router-dom";
import "./movie.css";

export default function Movie() {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="product">
      <div className="ProductContainer">
        <h2 className="productTitle">Movie</h2>
        <Link to="/movieupload">
          <button className="addProduct">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="producttopRight">
          <div className="productinfoTop">
            <img className="producucttopImage" src={movie.img} alt="" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productinfoBottom">
            <div className="productinfoItem">
              <span className="productinfoKey">Id:</span>
              <span className="productinfovalue">{movie._id}</span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">Genre:</span>
              <span className="productinfovalue">{movie.genre} </span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">age limit:</span>
              <span className="productinfovalue">{movie.limit}</span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">Year:</span>
              <span className="productinfovalue">{movie.year} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productbottom">
        <form className="productform">
          <div className="productformleft">
            <label>Movie Name</label>
            <input type="text" placeholder="enter movie name" />
            <label>Year</label>
            <input type="text" placeholder="released year" />
            <label>limit</label>
            <input type="text" placeholder="enter age limit" />
            <label>Genre</label>
            <input type="text" placeholder="movie Genre" />
            <label>Trailer</label>
            <input type="file" />
          </div>
          <div className="productformRight">
            <div className="productUpload">
              <img className="producuctImageUpload" src={movie.img} alt="" />
              <input type="file" id="file" />
            </div>
            <button className="updatebutton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
