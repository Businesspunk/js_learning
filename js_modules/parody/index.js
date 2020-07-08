class Parody{
    constructor( props )
    {
        if(  typeof props !== "object"  ){
            props = {};
        }

        this.props = props;

        this.isMount = false;
        this.targetNode = null;
    }

    test()
    {
        console.log(1);
    }

    bindMount(selector)
    {
        this.isMount = true;
        this.targetNode = document.querySelector(selector);
        return this;
    }

    render(node)
    {
        if( this.isMount ){
            this.targetNode.innerHTML = "";
            this.targetNode.appendChild(node);
        }

        return node;
    }

    watchObj( element, callback )
    {
        return new Proxy( element, {
            set( target, name, value ){
                target[name] = value;
                callback( name, value );
                return true;
            },
            get(target, name){
                return target[name];
            }
        } )
    }
}

function ParodyDom( tag, props, ...children )
{
    if(typeof tag === "function"){
        return (new tag(props)).render();
    }
    
    let node = document.createElement(tag);

    children.forEach((child) => {
        if(child instanceof HTMLElement){
            node.appendChild(child);
        }
        else{
            let textNode = document.createTextNode(child);
            node.appendChild(textNode);
        }
    });

    Object.assign(node, props); 
    
    return node;
}

export {ParodyDom, Parody};