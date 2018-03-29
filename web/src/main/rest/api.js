import req from 'request-promise-lite';

const url = (path) => window.location.href + path;
const options =  (body) => ({body: body, json: true});

export default {

    get: (path) => req.get(url(path), options()),

    post: (path, body) => req.post(url(path), options(body)),

    del: (path) => req.del(url(path)),

    put: (path,body) => req.put(url(path), options(body))

}