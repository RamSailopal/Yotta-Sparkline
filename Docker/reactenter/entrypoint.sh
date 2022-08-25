#!/bin/bash
apt-get update
apt-get install -y curl make g++
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs git
cd /home
git clone https://github.com/borisyankov/react-sparklines
cd react-sparklines
sed -i 's/webpack-dev-server --progress/webpack-dev-server --disableHostCheck --progress  --host 0.0.0.0/' package.json
cp /home/sparkline1/src/index.html demo/index.html
cp /home/sparkline1/src/demo.js demo/demo.js
sed -i "s@process.env.REACT_APP_APIADD@'$REACT_APP_APIADD'@" demo/demo.js
npm install axios
npm install
npm start
tail -f /dev/null
