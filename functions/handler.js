'use strict';

module.exports.hello = (event, context, callback) => {
    console.log(event);
    const response = {
        statusCode: 200,
        headers: {
            'x-hello-header': 'hello as a header',
        },
        body: JSON.stringify({
            message: 'hello to you!'
        }),
    };
    callback(null, response);
};