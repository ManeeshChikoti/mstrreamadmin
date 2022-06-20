import React from "react";
import "./newuser.css";
export default function Newuser() {
  return (
    <div className="newuser">
      <h2 className="newuserTitle">New User</h2>
      <form className="newuserform">
        <div className="newuserformItems">
          <label>Username</label>
          <input type="text" placeholder="Mani" />
        </div>
        <div className="newuserformItems">
          <label>Fullname</label>
          <input type="text" placeholder="Mani Chikoti" />
        </div>
        <div className="newuserformItems">
          <label>Email</label>
          <input type="email" placeholder="abc@gmail.com" />
        </div>
        <div className="newuserformItems">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuserformItems">
          <label>Number</label>
          <input type="text" placeholder="9876543210" />
        </div>
        <div className="newuserformItems">
          <label>Address</label>
          <input type="text" placeholder="Hyderabad" />
        </div>
        <div className="newuserformItems">
          <label>Gender</label>
          <div className="gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuserformItems">
            <label>Active</label>
           <select className="newuserselect" name="active" id="active">
               <option value="yes">Yes</option>
               <option value="no">No</option>
           </select>
        </div>
        <button className="newuswerbutton">Create</button>

      </form>
    </div>
  );
}
