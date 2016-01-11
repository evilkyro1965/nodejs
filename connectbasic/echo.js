/**
 * Created by Administrator on 1/11/2016.
 */
function echo (req,res,next) {
    req.pipe(res);
}

var connect = require('connect');

connect()
    .use(echo)
    .listen(3000);