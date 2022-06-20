import React from "react";
import "./info.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Info() {
  // static page with some randon info
  return (
    <div className="info">
      <div className="infoitems">
        <span className="infoTitle">Revenue</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$5000</span>
          <span className="infoRate">
            -5.04<ArrowDownwardIcon className="infoIcon negative" fontSize="small"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="infosub">Compared to last month</span>
      </div>

      <div className="infoitems">
        <span className="infoTitle">Sales</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$10000</span>
          <span className="infoRate">
            -3.64<ArrowDownwardIcon  className="infoIcon negative" fontSize="small"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="infosub">Compared to last month</span>
      </div>
      <div className="infoitems">
        <span className="infoTitle">Cost</span>
        <div className="infoMoneyContainer">
          <span className="infoMoney">$4000</span>
          <span className="infoRate">
            +3.95<ArrowUpwardIcon className="infoIcon"  fontSize="small" ></ArrowUpwardIcon>
          </span>
        </div>
        <span className="infosub">Compared to last month</span>
      </div>
    </div>
  );
}
