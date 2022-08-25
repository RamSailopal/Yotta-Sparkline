#!/bin/bash
apt-get update
apt-get install -y  lua5.3 liblua5.3-dev git make luarocks
cd /usr/local
git clone https://github.com/orbitalquark/lua-yottadb.git
cd lua-yottadb
make ydb_dist=$(pkg-config --variable=prefix yottadb)
mkdir -p /usr/local/lib/lua/5.3
cp _yottadb.so /usr/local/lib/lua/5.3
cp yottadb.lua /usr/local/lib/lua/5.3
source $(pkg-config --variable=prefix yottadb)/ydb_env_set
/opt/yottadb/current/ydb <<< 'H'
(echo "D ^%GI";echo "/home/sparkline1/vitals.go";echo "") | /opt/yottadb/current/ydb
luarocks install pegasus
cd /home/lua
source /opt/yottadb/current/ydb_env_set
lua web.lua
tail -f /dev/null
