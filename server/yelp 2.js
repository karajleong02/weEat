let yelpAPI = require('yelp-api')
let apiKey = 'Zf4XxkxmojKUostFXGLSsIXWRooeUW9ZSPMlvcHnNPNA2bU7BVJDQKjdsvZ1azYDJK2SbQVe1RG9c2nVfAjE5aWNJQa11e4mDk05K7uGPug9LZxbFfg7vLtM-S1UY3Yx'
let yelp = new yelpAPI(apiKey)

export function getInfo(params) {
    yelp.query("businesses/search", params)
    .then(data => {
        const obj = JSON.parse(data)
        return obj
    })
    .catch(err => {
        console.log(err)
    });
}
