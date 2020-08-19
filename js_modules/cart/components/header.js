import React from "react";
import Cart from "./cart";

class Header extends React.Component{
    render()
    {
        return <header>
            <Cart></Cart>
        </header>;
    }
}

export default Header;