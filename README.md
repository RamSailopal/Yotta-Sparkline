# Yotta-Sparkline

A demo of react-sparkline extracting data from YottaDB

![Alt text](vitals.JPG?raw=true "view")

# Execution

Install Docker and docker-compose and then:

      git clone https://github.com/RamSailopal/Yotta-Sparkline
      cd Yotta-Sparkline/Docker
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
 
 The data for the sparkline chart is stored in the global VITALS:
 
      ^VITALS(1)=22
      ^VITALS(2)=11
      ^VITALS(3)=54
      ^VITALS(4)=7
      ^VITALS(5)=12
      ^VITALS(6)=6
      ^VITALS(7)=37
      ^VITALS(8)=39
      ^VITALS(9)=21
      ^VITALS(10)=28


      

#  References

react-sparkline - https://github.com/borisyankov/react-sparklines

YottaDB - https://yottadb.com
