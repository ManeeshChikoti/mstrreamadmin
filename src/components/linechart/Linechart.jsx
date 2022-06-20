import React from 'react'
import "./linechart.css"
import {Line} from "react-chartjs-2";
import {Chart as CharJs} from "chart.js/auto"

export default function Linechart({chartdata}) {
  return (
    <div className='linechart'>
      <Line data={chartdata} options={{ maintainAspectRatio: false }} />
    </div>
  )
}
