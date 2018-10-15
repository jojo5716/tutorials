import React from 'react';


import { ToDoContext } from './contexts/';


class TodoList extends React.Component {
    constructor() {
        super();
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.itemInput = React.createRef();

        this.state = {
            list: []
        };
    }

    createItem() {
        const itemValue = this.itemInput.current.value;

        if (itemValue) {
            this.setState({
                list: [
                    ...this.state.list,
                    itemValue
                ]
            });

            this.itemInput.current.value = '';
            this.itemInput.current.focus();
        }
    }

    deleteItem(itemKey) {
        this.setState(({ list }) => ({
            list: list.filter((item, index) => index !== itemKey)
        }));
    }

    render() {
        const valueProvider = {
            list: this.state.list,
            deleteCallback: this.deleteItem
        }

        return (
            <ToDoContext.Provider value={valueProvider}>
                <div id="myDIV" className="header">
                    <h2>Lista de cosas ({valueProvider.list.length})</h2>
                    <input type="text" id="myInput" placeholder="Título..." ref={this.itemInput} />
                    <span className="addBtn" onClick={this.createItem}>Agregar</span>
                </div>

                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default TodoList;
