#!/bin/bash
apt-get update
apt-get install -y  lua5.3 liblua5.3-dev git make luarocks python3 python3-pip python3-dev python3-setuptools libffi-dev
source /opt/yottadb/current/ydb_env_set
python3 -m pip install yottadb
cd /home/sparkline1
python3 gen.py &
cd /usr/local
git clone https://github.com/orbitalquark/lua-yottadb.git
cd lua-yottadb
make ydb_dist=$(pkg-config --variable=prefix yottadb)
mkdir -p /usr/local/lib/lua/5.3
cp _yottadb.so /usr/local/lib/lua/5.3
cp yottadb.lua /usr/local/lib/lua/5.3
source $(pkg-config --variable=prefix yottadb)/ydb_env_set
/opt/yottadb/current/ydb <<< 'H'
luarocks install pegasus
cd /home/lua
source /opt/yottadb/current/ydb_env_set
lua web.lua
tail -f /dev/null
