import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots, SparklinesText } from '../src/Sparklines';
import axios from 'axios';


axios.get('process.env.REACT_APP_APIADD/temp').then(function(json_data) {
    var sampleData = [];
	    var keys = Object.keys(json_data.data);
	    keys.forEach(function(key){
		            sampleData.push(json_data.data[key]);
		        });
	    var lastval=sampleData[sampleData.length - 1];
    ReactDOM.render(<Sparklines data={sampleData}>
	            <SparklinesText text="test" style={ {color: "yellow" }}/>
	            <SparklinesLine />
	            <SparklinesSpots />
	            <SparklinesReferenceLine type="mean" />
	        </Sparklines>
	            
	    , document.getElementById('temp'));
    ReactDOM.render(<h1>{lastval}</h1>

	                            , document.getElementById('templast'));


});

axios.get('process.env.REACT_APP_APIADD/pulse').then(function(json_data) {
	    var sampleData = [];
	            var keys = Object.keys(json_data.data);
	            keys.forEach(function(key){
			                                sampleData.push(json_data.data[key]);
			                            });
	    var lastval=sampleData[sampleData.length - 1];
	    ReactDOM.render(<Sparklines data={sampleData}>
		                        <SparklinesLine style={{ fill: "none" }}/>
		                         <SparklinesReferenceLine type="mean" />
		                        <SparklinesSpots />
		                    </Sparklines>

		                , document.getElementById('pulse'));
             ReactDOM.render(<h1>{lastval}</h1>
                                , document.getElementById('pulselast'));

});

axios.get('process.env.REACT_APP_APIADD/resp').then(function(json_data) {
	            var sampleData = [];
	                    var keys = Object.keys(json_data.data);
	                    keys.forEach(function(key){
				                                                            sampleData.push(json_data.data[key]);
				                                                        });
	            var lastval=sampleData[sampleData.length - 1];
	            ReactDOM.render(<Sparklines data={sampleData}>
			                                            <SparklinesLine />
			                                            <SparklinesSpots />
			                                            <SparklinesReferenceLine type="mean" />
			                                        </Sparklines>

			                                    , document.getElementById('resp'));
                     ReactDOM.render(<h1>{lastval}</h1>

	                                        , document.getElementById('resplast'));

});


