local pegasus = require 'pegasus'
ydb = require('yottadb')
local server = pegasus:new({
          port='9090'
    })

    server:start(function (req, res)
             body = '['
             vit = ydb.subscript_next('^VITALS', {''})
             if ( vit ~= nil )
             then
                dat = ydb.get('^VITALS', {vit})
                body = body .. dat
             end
             vit = ydb.subscript_next('^VITALS', {vit})
             while( vit ~= nil )
             do
                dat = ydb.get('^VITALS', {vit})
                body = body .. ',' .. dat
                vit = ydb.subscript_next('^VITALS', {vit})
             end
             body = body .. ']\n'
             res:addHeader('Content-Type', 'text/html'):write(body)
        end)

