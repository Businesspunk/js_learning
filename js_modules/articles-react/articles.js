import React from "react";
import Article from "./article-component";
import * as ArticleModel from "./article-model"
import {Typography, Button, TextField} from "@material-ui/core";
import ModalAddArticle from "./modal-add-article-component";
import ModalViewArticle from "./modal-view-article-component";
import ArticlesAll from "./articles-component";

class Articles extends React.Component
{
    constructor(obj){
        super(obj);

        this.state = {
            articles: this.props.articles,
            popups: {
                addPopup: {
                    isOpen: false,
                    content: {
                        title: "",
                        body: ""
                    }
                },
                viewOnePopup: {
                    isOpen: false,
                    content: {
                        title: "",
                        body: ""
                    }
                },
                editOnePopup: {
                    isOpen: false,
                    content: {
                        title: "",
                        body: ""
                    }
                }
                
            }
        };
    }

    onSubmit()
    {
        let title = document.querySelector('#title');
        let content = document.querySelector('#content');

        this.onAdd( {title, content} );
    }

    async onAdd(data)
    {
        let title = data.title;
        let content = data.content;

        data = { title: title.value, body: content.value };
        
        let result = await ArticleModel.add( data );

        content.value = "";
        title.value = "";

        let articles =  [...this.state.articles];
        articles.unshift( result );
        this.setState({articles});
    }

    changePopupState( popupName, bool )
    {
        if( popupName in this.state.popups ){
            let popups = {...this.state.popups};
            popups[popupName].isOpen = bool;
            this.setState( { popups } );
        }
    }

    changeAddPopupState(bool)
    {
        this.changePopupState('addPopup', bool);
    }

    changeViewOnePopup(bool)
    {
        this.changePopupState('viewOnePopup', bool);
    }

    onDelete( id )
    {
        if( id == undefined ){ return; }
        let articles =  [...this.state.articles];
        articles.splice(id, 1);
        this.setState({articles});
    }

    getViewOnePopup()
    {
        let data = this.state.popups.viewOnePopup.content;
        
        return <ModalViewArticle 
            open={this.state.popups.viewOnePopup.isOpen}
            onClose={ () => { this.changeViewOnePopup(false) } } 
            onOk={ () => { this.changeViewOnePopup(false) } } 
            title={ data.title }
            body={ data.body }
            />
    }

    getAddOnePopup()
    {
        return <ModalAddArticle 
        open={this.state.popups.addPopup.isOpen}
        onClose={ () => { this.changeAddPopupState(false) } } 
        onOk = { () => { this.onSubmit() } }/>
    }

    async onOne(id)
    {
        let article = await ArticleModel.one(id);

        let popups = {...this.state.popups};
        let viewOnePopup = popups.viewOnePopup;
        viewOnePopup.isOpen = true;
        viewOnePopup.content = { ...article };

        this.setState( {popups} );
    }

    render()
    {
        let articles = <ArticlesAll articles={this.state.articles} onDelete={ (id) =>{ this.onDelete(id); } } /> 
        let addArticle = this.getAddOnePopup();
        let viewOnePopup = this.getViewOnePopup();

        return <div>
            {viewOnePopup}
            {addArticle}
            <Typography variant="h3" component="h1">
                Статьи - { articles.length }
                <Button onClick={ () => { this.changeAddPopupState(true); } } variant="outlined" color="primary" size="small">Добавить статью</Button>
                <div>
                    <TextField
                        id="one_id"
                        variant="outlined"
                        label="Просмотр по ID"
                        onChange={ (e) => this.onOne( e.target.value ) }
                        />
                </div>
            </Typography>
            {articles}
        </div>
    }

}

export default Articles;