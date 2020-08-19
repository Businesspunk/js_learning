import React from "react";

import Header from "./header";
import Content from "./content";

class Site extends React.Component{
    render()
    {
        return <div>
            <Header></Header>
            <hr/>
            <Content></Content>
            <hr/>
            <footer>footer</footer>
        </div>;
    }
}

export default Site;