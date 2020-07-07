import Parody from '../parody/index';
import InputNumber from '../components/input-number'

class Cart extends Parody{

    constructor( props ){
        super(props);

        this.state = {
            products: [
                { max: 10, price: 100, current: 1 },
                { max: 5, price: 20, current: 2 }
            ] 
        }
    }

    onChange( i, value )
    {
        this.state.products[i].current = value;
        this.render();
    }

    render()
    {
        let div = document.createElement('div');

        this.state.products.forEach( (product, i) => {
            let input = new InputNumber( {
                min: 1,
                current: product.current,
                max: product.max,
                change: this.onChange.bind(this, i)
            });

            div.appendChild( input.render() );
        });

        let summary = this.state.products.reduce( (result, product) => result + product.price*product.current, 0  );
        
        let divSum = document.createElement('div');
        divSum.innerHTML = summary;
        div.appendChild(divSum);

        return super.render(div);
    }


}

export default Cart;