import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./eachlistbyGenre.css";

export default function EachListByGenre() {
  const location = useLocation();
  const list = location.state;
  const contentlistItems = list.contentList;
console.log(contentlistItems)
  return (
    <div className="product">
      <div className="ProductContainer">
        <h2 className="productTitle">List</h2>
        <Link to="/newlist">
          <button className="addProduct">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="producttopRight">
          <div className="productinfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productinfoBottom">
            <div className="productinfoItem">
              <span className="productinfoKey">Id:</span>
              <span className="productinfovalue">{list._id}</span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">Genre:</span>
              <span className="productinfovalue">{list.genre} </span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">type:</span>
              <span className="productinfovalue">{list.type} </span>
            </div>
            <div className="productinfoItem">
              <span className="productinfoKey">Content List ids:</span>
              <ul className="contentlist">
                {contentlistItems.map((item) => {
                  return  <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="productbottom">
        <form className="productform">
          <div className="productformleft">
            <label>List Name</label>
            <input type="text" placeholder="enter movie name" />
            <label>Type</label>
            <input type="text" placeholder="released year" />
            <label>ContentList</label>
            <input type="text" placeholder="enter movie id" />
            <label>Genre</label>
            <input type="text" placeholder="movie Genre" />
          </div>
          <div className="productformRight">
            <button className="updatebutton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
