import React from 'react';
// eslint-disable-next-line no-unused-vars
import InputNumber from "./input-number";
// eslint-disable-next-line no-unused-vars
import { Button,Typography } from '@material-ui/core';

class Cart extends React.Component{

    constructor( props ){
        super(props);

        this.state = {
            products: [
                { max: 10, price: 100, current: 1 },
                { max: 5, price: 20, current: 2 }
            ]
        };
    }

    onChange( i, value ){
        let products = [...this.state.products];
        let product = Object.assign({}, this.state.products[i]);
        product.current = value;
        products[i] = product;
        this.setState({products});
    }

    onAdd() {
        let products = [...this.state.products];
        let product = { max: 20, price: 5, current: 1 };
        products.push(product);
        this.setState({products});
    }

    onRemove( ind ){
        let products = [...this.state.products];
        products.splice(ind, 1);
        this.setState({products});
    }
    
    render()
    {   
        let summary = this.state.products.reduce( (result, product) => result + product.price*product.current, 0  );

        let inputs = this.state.products.map( (item, i) => {
            return <div key={i}>
                        <InputNumber min="1"
                            max={item.max} 
                            current={ item.current } 
                            change={ (val) => { this.onChange(i, val) } }/>

                        <Button variant="contained" color="secondary" onClick={ () => { this.onRemove(i) } }>
                            Удалить
                        </Button>
                        <hr/>
                    </div> 
        } );

        return <div>
                {inputs}
                <hr/>
                <Typography variant="subtitle1" gutterBottom>{summary}</Typography>
                <Button variant="contained" color="primary" onClick={ () => { this.onAdd() } }>
                    Добавить
                </Button>
            </div>;
    }


}

export default Cart;