import React from "react";
import { useState } from "react";
import "./Home.css";

export default function Home() {

  // const [chartRangeOptions] = useState({
	// 	theme: "light2",
	// 	title:{
	// 	  text: "Average Request Range"
	// 	},
	// 	animationEnabled: true,
	// 	subtitles: [{
	// 	  text: "Tashkent County, Uzbekistan"
	// 	}],
	// 	axisY: {
	// 	  title: "Request (%)",
	// 	  suffix: "%"
	// 	},
	// 	data: [{
	// 	  type: "rangeColumn",
	// 	  indexLabel: "{y[#index]}°",
	// 	  toolTipContent: "<b>{label}</b><br>Min: {y[0]} % <br/> Max: {y[1]} %",
	// 	  dataPoints: [
	// 		{ label: "Jan", y: [48.5,	68.1] },
	// 		{ label: "Feb", y: [50.3,	69.6] },
	// 		{ label: "Mar", y: [51.6,	69.8] },
	// 		{ label: "Apr", y: [54.4,	73.1] },
	// 		{ label: "May", y: [57.9,	74.5] },
	// 		{ label: "Jun", y: [61.4,	79.5] },
	// 		{ label: "Jul", y: [64.6,	83.8] },
	// 		{ label: "Aug", y: [65.6,	84.8] },
	// 		{ label: "Sept", y: [64.6,	83.3] },
	// 		{ label: "Oct", y: [59.9,	79.0] },
	// 		{ label: "Nov", y: [52.6,	73.2] },
	// 		{ label: "Dec", y: [48.3,	68.7] }
	// 	  ]
	// 	}]
	// })

  // const [chartOptions] = useState({
	//   animationEnabled: true,
	//   title:{
	// 	text: "Requests Status"
	//   },
	//   data: [{
	// 	type: "doughnut",
	// 	yValueFormatString: "#,###.##'%'",
	// 	indexLabel: "{name}",
	// 	dataPoints: [
	// 	  { y: 44, name: "Complate" },
	// 	  { y: 0, name: "" },
	// 	  { y: 0, name: "" },
	// 	  { y: 34, name: "new" },
	// 	  { y: 66, name: "Pending" },
	// 	  { y: 76, name: "Registered" },
	// 	  { y: 0, name: "" },
	// 	]
	//   }]
	// })

  return (
    
<div class="px-3 py-4 p-sm-4 h-75">
  <div class="quick_activity_wrap px-0 py-4 px-sm-4">
    <div class="single_quick_activity">
      <h4>New</h4>
      <h3>Count: <span class="counter">56</span></h3>
      <p>Saved 25%</p>
    </div>
    <div class="single_quick_activity">
      <h4>Pending</h4>
      <h3>Count: <span class="counter">66</span></h3>
      <p>Saved 25%</p>
    </div>
    <div class="single_quick_activity">
      <h4>Registered</h4>
      <h3>Count: <span class="counter">76</span></h3>
      <p>Saved 25%</p>
    </div>
    <div class="single_quick_activity">
      <h4>Complate</h4>
      <h3>Count: <span class="counter">44</span></h3>
      <p>Saved 25%</p>
    </div>
  </div>

  {/* <div class="row py-5 px-lg-4">
    <div class="col-md-6 position-relative">
      <div class="div_canv1"></div>
      <canvasjs-chart options={chartRangeOptions} styles={{width: '100%', height:'360px'}}></canvasjs-chart>
    </div>

    <div class="col-md-6 position-relative">
      <div class="div_canv"></div>
      <canvasjs-chart options={chartOptions} styles={{width: '100%', height:'360px'}}></canvasjs-chart>
    </div>
  </div> */}
</div>
  );
}
