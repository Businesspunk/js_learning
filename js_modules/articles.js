import * as serverApi from './db';

async function all(){
    return new Promise(( resolve, reject )=> {
        serverApi.all().then( (response) => {
            let info = JSON.parse(response);
            if(info.code === 200){
                resolve(info.data);
            }
            else{
                reject(info.status);
            }
        }, (e) => { reject( e ) }).catch( (e) => { console.log(e, "catch error") } );
    })
}

async function one(id){
    return new Promise( ( resolve, reject ) => {
        serverApi.get(id).then( (response) => {
            let info = JSON.parse(response);
    
            if(info.code === 200){
                resolve(info.data);
            }
            else{
                reject(info.status);
            }
        }, (e) => { reject(e); });
    } );
    
}

async function remove(id){
    return new Promise( (resolve, reject) => {
        serverApi.remove(id).then( (response) => {
            let info = JSON.parse(response);
    
            if(info.code === 200){
                resolve(info.data);
            }
            else{
                reject(info.status);
            }
        }, (e) => { reject(e) } );
    })
}

export {all, one, remove};