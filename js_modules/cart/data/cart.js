import {observable, computed, action} from 'mobx';
import productsStore from "../data/products"

class Cart {
    @observable idProducts = [];

    @computed get count(){
        return this.idProducts.length
    }

    @computed get isInCart()
    {
        return (id) => this.idProducts.indexOf(id) !== -1; 
    }

    @computed get total()
    {
        return this.idProducts.reduce((total, id) => {
            return total + productsStore.item(id).price;
        }, 0);
    }

    @action clearAll(){
        this.idProducts = [];
    }

    @action add( id ){
        if( this.idProducts.indexOf(id) === -1 ){
            this.idProducts.push(id);
        }
    }

    @action remove( id )
    {
        let ind = this.idProducts.indexOf(id);

        if(this.idProducts.indexOf(id) !== -1){
            this.idProducts.splice(ind, 1);
        }
    }

    
}

export default new Cart();