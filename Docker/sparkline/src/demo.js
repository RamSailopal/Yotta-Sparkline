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
	    if (lastval >= 37.5 || lastval <= 36.5)  {
	    	var valcol="red"
	    }
	   else {
		var valcol="black"
           }
    ReactDOM.render(<Sparklines data={sampleData}>
	            <SparklinesLine />
	            <SparklinesSpots />
	            <SparklinesReferenceLine type="mean" />
	        </Sparklines>
	            
	    , document.getElementById('temp'));
    ReactDOM.render(<h1><font color={valcol}>{lastval}</font></h1>

	                            , document.getElementById('templast'));


});

axios.get('process.env.REACT_APP_APIADD/pulse').then(function(json_data) {
	    var sampleData = [];
	            var keys = Object.keys(json_data.data);
	            keys.forEach(function(key){
			                                sampleData.push(json_data.data[key]);
			                            });
	    var lastval=sampleData[sampleData.length - 1];
	    if (lastval >= 120 || lastval <= 80)  {
                     var valcol="red"
            }
            else {
                     var valcol="black"
            }
	    ReactDOM.render(<Sparklines data={sampleData}>
		                        <SparklinesLine style={{ fill: "none" }}/>
		                         <SparklinesReferenceLine type="mean" />
		                        <SparklinesSpots />
		                    </Sparklines>

		                , document.getElementById('pulse'));
             ReactDOM.render(<h1><font color={valcol}>{lastval}</font></h1>
                                , document.getElementById('pulselast'));

});

axios.get('process.env.REACT_APP_APIADD/resp').then(function(json_data) {
	            var sampleData = [];
	                    var keys = Object.keys(json_data.data);
	                    keys.forEach(function(key){
				                                                            sampleData.push(json_data.data[key]);
				                                                        });
	            var lastval=sampleData[sampleData.length - 1];
	            if (lastval >= 20 || lastval <= 16)  {
	                   var valcol="red"
					            }
	            else {
	                   var valcol="black"
	            }

	            ReactDOM.render(<Sparklines data={sampleData}>
			                                            <SparklinesLine />
			                                            <SparklinesSpots />
			                                            <SparklinesReferenceLine type="mean" />
			                                        </Sparklines>

			                                    , document.getElementById('resp'));
                     ReactDOM.render(<h1><font color={valcol}>{lastval}</font></h1>

	                                        , document.getElementById('resplast'));

});


