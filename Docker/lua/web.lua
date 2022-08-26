local pegasus = require 'pegasus'
ydb = require('yottadb')
local server = pegasus:new({
          port='9090'
    })

    server:start(function (req, res)
             if(req:path()=='/temp')
             then
             	body = '['
             	vit = ydb.subscript_next('^VITALS', {'temp',''})
             	if ( vit ~= nil )
             	then
               	 dat = ydb.get('^VITALS', {'temp',vit})
               	 body = body .. dat
             	end
             	vit = ydb.subscript_next('^VITALS', {'temp',vit})
             	while( vit ~= nil )
             	do
               	 dat = ydb.get('^VITALS', {'temp',vit})
               	 body = body .. ',' .. dat
               	 vit = ydb.subscript_next('^VITALS', {'temp',vit})
             	end
             	body = body .. ']\n'
             	res:addHeader('Content-Type', 'text/html'):write(body)
             elseif(req:path()=='/pulse')
             then
                body = '['
                vit = ydb.subscript_next('^VITALS', {'pulse',''})
                if ( vit ~= nil )
                then
                 dat = ydb.get('^VITALS', {'pulse',vit})
                 body = body .. dat
                end
                vit = ydb.subscript_next('^VITALS', {'pulse',vit})
                while( vit ~= nil )
                do
                 dat = ydb.get('^VITALS', {'pulse',vit})
                 body = body .. ',' .. dat
                 vit = ydb.subscript_next('^VITALS', {'pulse',vit})
                end
                body = body .. ']\n'
                res:addHeader('Content-Type', 'text/html'):write(body)
             elseif(req:path()=='/resp')
             then
                body = '['
                vit = ydb.subscript_next('^VITALS', {'resp',''})
                if ( vit ~= nil )
                then
                 dat = ydb.get('^VITALS', {'resp',vit})
                 body = body .. dat
                end
                vit = ydb.subscript_next('^VITALS', {'resp',vit})
                while( vit ~= nil )
                do
                 dat = ydb.get('^VITALS', {'resp',vit})
                 body = body .. ',' .. dat
                 vit = ydb.subscript_next('^VITALS', {'resp',vit})
                end
                body = body .. ']\n'
                res:addHeader('Content-Type', 'text/html'):write(body)
             else
                res:addHeader('Content-Type', 'text/html'):write('[]\n')
             end
        end)

