var   request = require('request')
    , config = require('../config').global

// var r = request.defaults({proxy: config.proxy});

function call(url, callback){
    
    //https://github.com/mikeal/request

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body); //인자로 받은 callback() 호출 
        }
        else {
            callback(body,error);
        }
    });
}

//함수 export 
exports.call = call;