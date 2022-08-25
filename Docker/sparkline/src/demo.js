import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from '../src/Sparklines';
import axios from 'axios';


axios.get(process.env.REACT_APP_APIADD).then(function(json_data) {
    var sampleData = [];
	    var keys = Object.keys(json_data.data);
	    keys.forEach(function(key){
		            sampleData.push(json_data.data[key]);
		        });
    ReactDOM.render(<Sparklines data={sampleData}>
	            <SparklinesLine />
	            <SparklinesReferenceLine type="mean" />
	        </Sparklines>
	            
	    , document.getElementById('simple'));
});
