import React from "react";
import Modal from "./modal-component"
import {TextField} from "@material-ui/core";

class ModalAddArticle extends Modal
{
    constructor( obj )
    {
        super(obj);
    }

    render()
    {
        return <Modal 
            title="Добавить статью"
            open={this.props.open}
            onClose={ this.props.onClose } 
            onOk = { this.props.onOk } >
                <form>
                    <TextField
                        id="title"
                        variant="outlined"
                        label="Заголовок"
                        />
                    <hr/>
                    <TextField
                        id="content"
                        variant="outlined"
                        label="Контент"
                        multiline
                        rowsMax={4}
                        />
                </form>
            </Modal>
    }
}

export default ModalAddArticle;