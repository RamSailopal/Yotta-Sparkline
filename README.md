# Yotta-Sparkline

A demo of react-sparkline extracting data from YottaDB

![Alt text](vitals.JPG?raw=true "view")

# Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RamSailopal/Yotta-Sparkline)

# Execution

Install Docker and docker-compose and then:

      git clone https://github.com/RamSailopal/Yotta-Sparkline
      cd Yotta-Sparkline/Docker
      export apiadd='http://dockerserveraddress:9090'
      docker-compose up
      
# Viewing the chart

   Due to blocked cross origin requests, A CORS browser add-on also needs to be added and enabled
   https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/
   
   https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en
   
   With the firefox addon, ensure that the plugin is enabled in the browser header as in the image below:
   
   ![Alt text](https://github.com/RamSailopal/Fileman-d3/raw/main/corsdisabled.png?raw=true "CORS enabled")
   
   This contrasts to when CORS is disabled as in the image below:
   
   ![Alt text](https://github.com/RamSailopal/Fileman-d3/raw/main/corsdisabled.png?raw=true "CORS disabled")
   
 Once the addons are installed, navigate your browser to http://dockerserveraddress:8080
 
 
 # YottaDB data
 
 The data for the sparkline chart is stored in the global VITALS i.e:
 
      
      ^VITALS("pulse","26082022135910")=92
      ^VITALS("pulse","26082022135915")=81
      ^VITALS("pulse","26082022135920")=118
      ^VITALS("resp","26082022135910")=20
      ^VITALS("resp","26082022135915")=19
      ^VITALS("resp","26082022135920")=16
      ^VITALS("temp","26082022135910")=36.8
      ^VITALS("temp","26082022135915")=37.2
      ^VITALS("temp","26082022135920")=36.8
      
 
 The first subscript represents the category of reading and the second a date/time stamp in the format (daymonthyearhourminutesseconds)
      
 This is then exposed as an array for each reading using Lua and Pegasus - https://evandrolg.github.io/pegasus.lua/
 
 The ^VITALS global is populated with random figures within excepted ranges for each reading using a Python script that adds new readings every 5 seconds.
 
 The data can be view by navigating to: 
 
 http://dockerserveraddress:9090/temp for temperature readings
 
 http://dockerserveraddress:9090/pulse for heart rate readings
 
 http://dockerserveraddress:9090/resp for temperature respiratory readings
 
 
     

#  References

react-sparkline - https://github.com/borisyankov/react-sparklines

YottaDB - https://yottadb.com
