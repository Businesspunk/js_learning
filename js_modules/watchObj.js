function watchObj( element, callback ){

    let object = {
        element: element,
        style: null
    }

    object.style = new Proxy( object, {
        set( target, name, value ){
            target.element.style[name] = value;
            callback( name, value );
            return true;
        },
        get(target, name){
            return target.element.style[name];
        }
    })

    return new Proxy( object, {
        set( target, name, value ){
            target.element[name] = value;
            callback( name, value );
            return true;
        },
        get(target, name){
            if( name == "style" ){
                return target.style;
            }else if( typeof target.element[name] == "function" ){
                return function(){
                    return target.element[name](arguments[0]);
                }
            }
            else{
                return target.element[name];
            }
        }
    } )
}

export default watchObj;