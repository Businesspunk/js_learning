import {makeRequest} from "../requests";
import "@babel/polyfill";

function isEmpty(obj) {
    for(var prop in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if(obj.hasOwnProperty(prop)) {
        return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

async function all()
{
    let result = await makeRequest('posts');
    return result;
}

async function one(id)
{
    let result = await makeRequest(`posts/${id}`);
    return result;
}

async function remove(id)
{
    let result = await makeRequest(`posts/${id}`, {
        method: "DELETE"
    });
    return isEmpty(result);
}

async function add( obj )
{
    let result = await makeRequest('posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

    return result;
}

async function edit( id, obj )
{
    let data = {
        ...obj, id
    };

    let result = await makeRequest(`posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    return result;
}

export {all, one, remove, add, edit};