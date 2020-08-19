import React from "react";
import {observer} from 'mobx-react';
import cartStore from "../data/cart";

export default @observer class extends React.Component
{
    render()
    {
        return <div>
            <input type="button" value="x" onClick={ () => { cartStore.clearAll() } }/>
            <div>In Cart: {cartStore.count}</div>
            <div>Total: {cartStore.total}</div>
        </div>;
    }
}

