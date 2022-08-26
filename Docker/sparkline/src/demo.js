import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve,  SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots, SparklinesText } from '../src/Sparklines';
import axios from 'axios';


axios.get('http://192.168.240.21:9090/temp').then(function(json_data) {
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

axios.get('http://192.168.240.21:9090/pulse').then(function(json_data) {
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

axios.get('http://192.168.240.21:9090/resp').then(function(json_data) {
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


