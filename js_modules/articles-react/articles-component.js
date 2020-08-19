import React from "react";
import Article from "./article-component"
import Grid from '@material-ui/core/Grid';

export default class extends React.Component
{
    constructor( obj )
    {
        super(obj);
    }

    render()
    {
        let articles = this.props.articles.map( (item, i) => {
            return  <Article 
                        onDelete={ ()=> { this.props.onDelete(i) } } 
                        key={i} 
                        title={item.title} 
                        body={item.body} 
                        openEditModal={ ()=> { this.props.openEditModal(i) } }
                        />
        } );

        return <Grid container spacing={1}>
            {articles}
        </Grid>
    }
}