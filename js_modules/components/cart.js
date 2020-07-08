// eslint-disable-next-line no-unused-vars
import {Parody, ParodyDom} from '../parody';
// eslint-disable-next-line no-unused-vars
import InputNumber from './input-number';

class Cart extends Parody{

    constructor( props ){
        super(props);

        this.state = {
            products: [
                { max: 10, price: 100, current: 1 },
                { max: 5, price: 20, current: 2 }
            ] 
        }

        this.state.products.forEach((item, i) => {
            this.state.products[i] = this.watchObj( item, () => { this.render(); } );
        });
        
    }

    onChange( i, value )
    {
        this.state.products[i].current = value;
    }

    render()
    {
        let prod = this.state.products;
        
        let summary = this.state.products.reduce( (result, product) => result + product.price*product.current, 0  );

        return super.render(
            <div>
                <InputNumber min="1" max={prod[0].max} current={ prod[0].current } 
                             change={this.onChange.bind(this, 0)} />
                <InputNumber min="1" max={prod[1].max} current={prod[1].current} 
                             change={this.onChange.bind(this, 1)} />
                <hr/>
                <div>{summary}</div>
            </div>
        );
    }


}

export default Cart;