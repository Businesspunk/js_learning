import React from "react";
import { Grid, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import {observer} from 'mobx-react';
import productsStore from "../data/products";
import cartStore from "../data/cart";

export default @observer class extends React.Component{

    render()
    {
        let products = productsStore.list.map((item) => {

            let cartBtn = !cartStore.isInCart(item.id) ? 
                <Button variant="contained" color="primary" onClick={ () => { cartStore.add(item.id) } }>
                    Add to cart
                </Button> :
                <Button variant="contained" color="secondary" onClick={ () => { cartStore.remove(item.id) } }>
                    Remove from cart
                </Button>;

            return <Grid item xs={4} key={item.id}>
                <Card>
                    <CardHeader title={item.title}/>
                    <CardContent>
                        {item.price}
                    </CardContent>
                    <CardActions>
                        {cartBtn}
                    </CardActions>
                </Card>
            </Grid>
        });

        return <Grid container spacing={10}>
            {products}
        </Grid>;
    }
}